import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const CATEGORIES = [
  'billing',
  'technical',
  'content',
  'account',
  'live',
  'other',
] as const;
const PRIORITIES = ['low', 'normal', 'high', 'urgent'] as const;
const STATUSES = ['open', 'pending', 'answered', 'resolved', 'closed'] as const;

@Injectable()
export class SupportService {
  constructor(private readonly prisma: PrismaService) {}

  async createTicket(
    userId: string,
    input: {
      subject?: string;
      category?: string;
      priority?: string;
      body?: string;
    },
  ) {
    const subject = (input.subject ?? '').trim();
    const body = (input.body ?? '').trim();
    if (subject.length < 3) throw new BadRequestException('Subject too short');
    if (body.length < 5) throw new BadRequestException('Message too short');
    const category = CATEGORIES.includes(input.category as (typeof CATEGORIES)[number])
      ? (input.category as string)
      : 'other';
    const priority = PRIORITIES.includes(input.priority as (typeof PRIORITIES)[number])
      ? (input.priority as string)
      : 'normal';

    const ticket = await this.prisma.ticket.create({
      data: {
        userId,
        subject,
        category,
        priority,
        status: 'open',
        messages: {
          create: {
            authorId: userId,
            body,
            isStaff: false,
          },
        },
      },
      include: {
        messages: { orderBy: { createdAt: 'asc' }, include: { author: true } },
      },
    });

    await this.prisma.auditLog.create({
      data: {
        actorId: userId,
        action: 'ticket.create',
        entity: 'Ticket',
        entityId: ticket.id,
        metaJson: JSON.stringify({ category, priority }),
      },
    });

    return ticket;
  }

  listForUser(userId: string) {
    return this.prisma.ticket.findMany({
      where: { userId },
      include: {
        _count: { select: { messages: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          select: { body: true, createdAt: true, isStaff: true },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async getForUser(userId: string, ticketId: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
          include: {
            author: {
              select: { id: true, displayName: true, role: true, phone: true },
            },
          },
        },
        assignee: {
          select: { id: true, displayName: true, role: true },
        },
      },
    });
    if (!ticket || ticket.userId !== userId) throw new NotFoundException();
    return ticket;
  }

  async replyAsUser(userId: string, ticketId: string, body?: string) {
    const text = (body ?? '').trim();
    if (text.length < 1) throw new BadRequestException('Empty message');
    const ticket = await this.prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket || ticket.userId !== userId) throw new NotFoundException();
    if (ticket.status === 'closed') {
      throw new BadRequestException('Ticket is closed');
    }

    const message = await this.prisma.ticketMessage.create({
      data: { ticketId, authorId: userId, body: text, isStaff: false },
    });

    await this.prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: ticket.status === 'answered' ? 'pending' : ticket.status === 'resolved' ? 'open' : 'pending',
        updatedAt: new Date(),
      },
    });

    return message;
  }

  async closeAsUser(userId: string, ticketId: string) {
    const ticket = await this.prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket || ticket.userId !== userId) throw new NotFoundException();
    return this.prisma.ticket.update({
      where: { id: ticketId },
      data: { status: 'closed', closedAt: new Date() },
    });
  }

  async stats() {
    const [open, pending, answered, resolved, closed, urgent] = await Promise.all([
      this.prisma.ticket.count({ where: { status: 'open' } }),
      this.prisma.ticket.count({ where: { status: 'pending' } }),
      this.prisma.ticket.count({ where: { status: 'answered' } }),
      this.prisma.ticket.count({ where: { status: 'resolved' } }),
      this.prisma.ticket.count({ where: { status: 'closed' } }),
      this.prisma.ticket.count({
        where: { priority: 'urgent', status: { in: ['open', 'pending', 'answered'] } },
      }),
    ]);
    return { open, pending, answered, resolved, closed, urgent };
  }

  listForStaff(filters: { status?: string; q?: string; category?: string }) {
    const status =
      filters.status && STATUSES.includes(filters.status as (typeof STATUSES)[number])
        ? filters.status
        : undefined;
    const category =
      filters.category && CATEGORIES.includes(filters.category as (typeof CATEGORIES)[number])
        ? filters.category
        : undefined;
    const q = filters.q?.trim();

    return this.prisma.ticket.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(category ? { category } : {}),
        ...(q
          ? {
              OR: [
                { subject: { contains: q } },
                { user: { phone: { contains: q } } },
                { user: { displayName: { contains: q } } },
                { user: { email: { contains: q } } },
              ],
            }
          : {}),
      },
      include: {
        user: {
          select: { id: true, displayName: true, phone: true, email: true },
        },
        assignee: {
          select: { id: true, displayName: true, role: true },
        },
        _count: { select: { messages: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          select: { body: true, createdAt: true, isStaff: true },
        },
      },
      orderBy: [{ priority: 'desc' }, { updatedAt: 'desc' }],
      take: 200,
    });
  }

  async getForStaff(ticketId: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            phone: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
        assignee: {
          select: { id: true, displayName: true, role: true },
        },
        messages: {
          orderBy: { createdAt: 'asc' },
          include: {
            author: {
              select: { id: true, displayName: true, role: true, phone: true },
            },
          },
        },
      },
    });
    if (!ticket) throw new NotFoundException();
    return ticket;
  }

  async replyAsStaff(staffId: string, ticketId: string, body?: string) {
    const text = (body ?? '').trim();
    if (text.length < 1) throw new BadRequestException('Empty message');
    const ticket = await this.prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket) throw new NotFoundException();
    if (ticket.status === 'closed') {
      throw new BadRequestException('Ticket is closed — reopen first');
    }

    const message = await this.prisma.ticketMessage.create({
      data: { ticketId, authorId: staffId, body: text, isStaff: true },
    });

    await this.prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: 'answered',
        assignedToId: ticket.assignedToId ?? staffId,
        updatedAt: new Date(),
      },
    });

    await this.prisma.auditLog.create({
      data: {
        actorId: staffId,
        action: 'ticket.staff_reply',
        entity: 'Ticket',
        entityId: ticketId,
        metaJson: '{}',
      },
    });

    return message;
  }

  async updateAsStaff(
    staffId: string,
    ticketId: string,
    input: { status?: string; priority?: string; assignedToId?: string | null; category?: string },
  ) {
    const ticket = await this.prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket) throw new NotFoundException();

    if (input.status && !STATUSES.includes(input.status as (typeof STATUSES)[number])) {
      throw new BadRequestException('Invalid status');
    }
    if (input.priority && !PRIORITIES.includes(input.priority as (typeof PRIORITIES)[number])) {
      throw new BadRequestException('Invalid priority');
    }
    if (input.category && !CATEGORIES.includes(input.category as (typeof CATEGORIES)[number])) {
      throw new BadRequestException('Invalid category');
    }
    if (input.assignedToId) {
      const assignee = await this.prisma.user.findUnique({
        where: { id: input.assignedToId },
      });
      if (!assignee) throw new BadRequestException('Assignee not found');
      if (
        !['super_admin', 'editor', 'instructor', 'support', 'analyst'].includes(assignee.role)
      ) {
        throw new ForbiddenException('Assignee must be staff');
      }
    }

    const updated = await this.prisma.ticket.update({
      where: { id: ticketId },
      data: {
        status: input.status,
        priority: input.priority,
        category: input.category,
        assignedToId:
          input.assignedToId === undefined ? undefined : input.assignedToId,
        closedAt:
          input.status === 'closed' || input.status === 'resolved'
            ? new Date()
            : input.status
              ? null
              : undefined,
      },
    });

    await this.prisma.auditLog.create({
      data: {
        actorId: staffId,
        action: 'ticket.update',
        entity: 'Ticket',
        entityId: ticketId,
        metaJson: JSON.stringify(input),
      },
    });

    return updated;
  }

  openCountForUser(userId: string) {
    return this.prisma.ticket.count({
      where: {
        userId,
        status: { in: ['open', 'pending', 'answered'] },
      },
    });
  }
}
