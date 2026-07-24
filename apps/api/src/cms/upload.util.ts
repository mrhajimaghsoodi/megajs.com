import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import { randomUUID } from 'crypto';

export const ALLOWED_IMAGE_MIME = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
]);

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

export function uploadsRoot() {
  return process.env.UPLOAD_DIR || join(process.cwd(), 'uploads');
}

export function ensureUploadsDir(...parts: string[]) {
  const dir = join(uploadsRoot(), ...parts);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  return dir;
}

export function publicUploadUrl(storageKey: string) {
  const base = (process.env.UPLOAD_PUBLIC_BASE || '/api/uploads').replace(/\/$/, '');
  return `${base}/${storageKey.replace(/^\/+/, '')}`;
}

export function safeExt(originalName: string, mimeType: string) {
  const fromName = extname(originalName || '').toLowerCase();
  if (fromName && fromName.length <= 5) return fromName;
  if (mimeType === 'image/png') return '.png';
  if (mimeType === 'image/webp') return '.webp';
  if (mimeType === 'image/gif') return '.gif';
  return '.jpg';
}

export function writeUploadedFile(file: {
  originalname: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}) {
  const now = new Date();
  const y = String(now.getFullYear());
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const ext = safeExt(file.originalname, file.mimetype);
  const filename = `${randomUUID()}${ext}`;
  const storageKey = `${y}/${m}/${filename}`;
  const dir = ensureUploadsDir(y, m);
  const diskPath = join(dir, filename);
  writeFileSync(diskPath, file.buffer);
  return {
    storageKey,
    diskPath,
    filename: file.originalname || filename,
    url: publicUploadUrl(storageKey),
    sizeBytes: file.size,
    mimeType: file.mimetype,
  };
}

export function deleteStoredFile(storageKey?: string | null) {
  if (!storageKey) return;
  const full = join(uploadsRoot(), storageKey);
  if (existsSync(full)) {
    try {
      unlinkSync(full);
    } catch {
      /* ignore */
    }
  }
}
