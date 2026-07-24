'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  GripVertical,
  Plus,
  Trash2,
} from 'lucide-react';
import { adminFetch } from '@/components/admin-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAdminLocale } from '@/i18n/locale-context';
import {
  DEFAULT_MY_ACCOUNT,
  type MyAccountBanner,
  type MyAccountItem,
  type MyAccountSettings,
} from '@/lib/my-account';

const ROLE_OPTIONS = [
  'customer',
  'subscriber',
  'editor',
  'instructor',
  'support',
  'super_admin',
  'guest',
];

const ICON_OPTIONS = [
  'LayoutDashboard',
  'GraduationCap',
  'ShoppingBag',
  'Wallet',
  'Code2',
  'Radio',
  'LifeBuoy',
  'Settings',
  'Folder',
  'ExternalLink',
];

function newId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function sortItems(items: MyAccountItem[]) {
  return [...items].sort((a, b) => a.order - b.order);
}

function moveItem(items: MyAccountItem[], id: string, dir: -1 | 1) {
  const sorted = sortItems(items);
  const idx = sorted.findIndex((i) => i.id === id);
  if (idx < 0) return items;
  const swap = idx + dir;
  if (swap < 0 || swap >= sorted.length) return items;
  const next = [...sorted];
  const tmpOrder = next[idx].order;
  next[idx] = { ...next[idx], order: next[swap].order };
  next[swap] = { ...next[swap], order: tmpOrder };
  return next;
}

export default function MyAccountPluginPage() {
  const { dict, locale } = useAdminLocale();
  const d = dict.plugins;
  const [settings, setSettings] = useState<MyAccountSettings | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);

  useEffect(() => {
    void adminFetch('/admin/plugins/my-account/settings')
      .then((s) => {
        setSettings(s);
        setSelectedId(s.items?.[0]?.id ?? null);
      })
      .catch((e) => setError(e.message));
  }, []);

  const save = async () => {
    if (!settings) return;
    try {
      const next = await adminFetch('/admin/plugins/my-account/settings', {
        method: 'PUT',
        body: JSON.stringify(settings),
      });
      setSettings(next);
      setMsg(d.saved);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const resetDefaults = () => {
    setSettings(structuredClone(DEFAULT_MY_ACCOUNT));
    setSelectedId(DEFAULT_MY_ACCOUNT.items[0]?.id ?? null);
  };

  if (!settings) {
    return <p className="text-sm text-[var(--mj-muted-fg)]">{error || dict.loading}</p>;
  }

  const flatFind = (
    items: MyAccountItem[],
    id: string,
  ): { item: MyAccountItem; parent?: MyAccountItem } | null => {
    for (const item of items) {
      if (item.id === id) return { item };
      if (item.children) {
        for (const child of item.children) {
          if (child.id === id) return { item: child, parent: item };
        }
      }
    }
    return null;
  };

  const selected = selectedId ? flatFind(settings.items, selectedId) : null;

  const updateSelected = (patch: Partial<MyAccountItem>) => {
    if (!selectedId) return;
    setSettings((prev) => {
      if (!prev) return prev;
      const mapItems = (items: MyAccountItem[]): MyAccountItem[] =>
        items.map((item) => {
          if (item.id === selectedId) return { ...item, ...patch };
          if (item.children) {
            return { ...item, children: mapItems(item.children) };
          }
          return item;
        });
      return { ...prev, items: mapItems(prev.items) };
    });
  };

  const addEndpoint = (type: MyAccountItem['type'] = 'endpoint') => {
    const item: MyAccountItem = {
      id: newId(type),
      type,
      label: type === 'group' ? 'گروه جدید' : type === 'link' ? 'لینک جدید' : 'بخش جدید',
      labelEn: type === 'group' ? 'New group' : type === 'link' ? 'New link' : 'New endpoint',
      icon: type === 'group' ? 'Folder' : type === 'link' ? 'ExternalLink' : 'LayoutDashboard',
      slug: type === 'endpoint' ? `custom-${Date.now().toString(36)}` : undefined,
      href: type === 'link' ? '/learn' : undefined,
      enabled: true,
      order: (settings.items.at(-1)?.order ?? 0) + 10,
      roles: [],
      className: '',
      children: type === 'group' ? [] : undefined,
    };
    setSettings({ ...settings, items: [...settings.items, item] });
    setSelectedId(item.id);
  };

  const removeSelected = () => {
    if (!selectedId) return;
    setSettings((prev) => {
      if (!prev) return prev;
      const filterItems = (items: MyAccountItem[]): MyAccountItem[] =>
        items
          .filter((i) => i.id !== selectedId)
          .map((i) =>
            i.children ? { ...i, children: filterItems(i.children) } : i,
          );
      return { ...prev, items: filterItems(prev.items) };
    });
    setSelectedId(null);
  };

  const onDropReorder = (targetId: string) => {
    if (!dragId || dragId === targetId) return;
    const sorted = sortItems(settings.items);
    const from = sorted.findIndex((i) => i.id === dragId);
    const to = sorted.findIndex((i) => i.id === targetId);
    if (from < 0 || to < 0) return;
    const next = [...sorted];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setSettings({
      ...settings,
      items: next.map((item, i) => ({ ...item, order: (i + 1) * 10 })),
    });
    setDragId(null);
  };

  const updateBanner = (id: string, patch: Partial<MyAccountBanner>) => {
    setSettings({
      ...settings,
      banners: settings.banners.map((b) => (b.id === id ? { ...b, ...patch } : b)),
    });
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">{d.myAccountTitle}</h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--mj-muted-fg)]">
            {d.myAccountSubtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={resetDefaults}>
            {d.resetDefaults}
          </Button>
          <Button onClick={() => void save()}>{d.save}</Button>
        </div>
      </div>

      {error ? <p className="text-sm text-[var(--mj-danger)]">{error}</p> : null}
      {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}

      <section className="grid gap-4 rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="space-y-1 text-sm">
          <span className="font-medium">{d.layoutMode}</span>
          <select
            className="h-10 w-full rounded-xl border border-[var(--mj-border)] bg-transparent px-3"
            value={settings.layout}
            onChange={(e) =>
              setSettings({
                ...settings,
                layout: e.target.value as MyAccountSettings['layout'],
              })
            }
          >
            <option value="sidebar">{d.layoutSidebar}</option>
            <option value="tabs">{d.layoutTabs}</option>
          </select>
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium">{d.sidebarPosition}</span>
          <select
            className="h-10 w-full rounded-xl border border-[var(--mj-border)] bg-transparent px-3"
            value={settings.sidebarPosition}
            onChange={(e) =>
              setSettings({
                ...settings,
                sidebarPosition: e.target.value as MyAccountSettings['sidebarPosition'],
              })
            }
          >
            <option value="start">{d.positionStart}</option>
            <option value="end">{d.positionEnd}</option>
          </select>
        </label>
        {(
          [
            ['ajax', d.ajaxNav, settings.ajax],
            ['enabled', d.pluginEnabled, settings.enabled],
          ] as const
        ).map(([key, label, value]) => (
          <label key={key} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) =>
                setSettings({ ...settings, [key]: e.target.checked } as MyAccountSettings)
              }
            />
            {label}
          </label>
        ))}
      </section>

      <section className="grid gap-4 rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-card)] p-4 lg:grid-cols-3">
        <div>
          <h2 className="font-display text-lg font-semibold">{d.security}</h2>
          <div className="mt-3 space-y-2 text-sm">
            {(
              [
                ['emailEnabled', d.emailVerify, settings.emailVerification.enabled],
                ['blockLogin', d.blockLoginUnverified, settings.emailVerification.blockLogin],
                [
                  'blockPurchase',
                  d.blockPurchaseUnverified,
                  settings.emailVerification.blockPurchase,
                ],
                ['captcha', d.captchaEnabled, settings.captcha.enabled],
              ] as const
            ).map(([key, label, value]) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => {
                    if (key === 'captcha') {
                      setSettings({
                        ...settings,
                        captcha: { enabled: e.target.checked },
                      });
                    } else if (key === 'emailEnabled') {
                      setSettings({
                        ...settings,
                        emailVerification: {
                          ...settings.emailVerification,
                          enabled: e.target.checked,
                        },
                      });
                    } else if (key === 'blockLogin') {
                      setSettings({
                        ...settings,
                        emailVerification: {
                          ...settings.emailVerification,
                          blockLogin: e.target.checked,
                        },
                      });
                    } else {
                      setSettings({
                        ...settings,
                        emailVerification: {
                          ...settings.emailVerification,
                          blockPurchase: e.target.checked,
                        },
                      });
                    }
                  }}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold">{d.colors}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {(
              [
                ['menuBg', d.colorMenuBg],
                ['menuText', d.colorMenuText],
                ['menuActiveBg', d.colorActiveBg],
                ['menuActiveText', d.colorActiveText],
                ['contentBg', d.colorContentBg],
                ['accent', d.colorAccent],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="space-y-1 text-sm">
                <span>{label}</span>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    className="h-10 w-12 p-1"
                    value={settings.colors[key]}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        colors: { ...settings.colors, [key]: e.target.value },
                      })
                    }
                  />
                  <Input
                    value={settings.colors[key]}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        colors: { ...settings.colors, [key]: e.target.value },
                      })
                    }
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <section className="rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-card)] p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={() => addEndpoint('endpoint')}>
              <Plus className="me-1 size-3.5" />
              {d.addEndpoint}
            </Button>
            <Button size="sm" variant="outline" onClick={() => addEndpoint('group')}>
              <Plus className="me-1 size-3.5" />
              {d.addGroup}
            </Button>
            <Button size="sm" variant="outline" onClick={() => addEndpoint('link')}>
              <Plus className="me-1 size-3.5" />
              {d.addLink}
            </Button>
          </div>
          <p className="mb-2 text-xs text-[var(--mj-muted-fg)]">{d.dragHint}</p>
          <ul className="space-y-1">
            {sortItems(settings.items).map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  draggable
                  onDragStart={() => setDragId(item.id)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => onDropReorder(item.id)}
                  onClick={() => setSelectedId(item.id)}
                  className={`flex w-full items-center gap-2 rounded-xl px-2 py-2 text-start text-sm ${
                    selectedId === item.id
                      ? 'bg-[var(--mj-accent)] text-[var(--mj-accent-fg)]'
                      : 'hover:bg-[var(--mj-muted)]'
                  }`}
                >
                  <GripVertical className="size-3.5 shrink-0 opacity-50" />
                  <span className="flex-1 truncate">
                    {locale === 'en' ? item.labelEn : item.label}
                    <span className="ms-1 opacity-60">({item.type})</span>
                  </span>
                  <span
                    className="inline-flex gap-0.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      className="rounded p-1 hover:bg-black/10"
                      onClick={() =>
                        setSettings({
                          ...settings,
                          items: moveItem(settings.items, item.id, -1),
                        })
                      }
                    >
                      <ArrowUp className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      className="rounded p-1 hover:bg-black/10"
                      onClick={() =>
                        setSettings({
                          ...settings,
                          items: moveItem(settings.items, item.id, 1),
                        })
                      }
                    >
                      <ArrowDown className="size-3.5" />
                    </button>
                  </span>
                </button>
                {item.children?.length ? (
                  <ul className="ms-6 mt-1 space-y-1 border-s border-[var(--mj-border)] ps-2">
                    {sortItems(item.children).map((child) => (
                      <li key={child.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedId(child.id)}
                          className={`w-full rounded-lg px-2 py-1.5 text-start text-xs ${
                            selectedId === child.id
                              ? 'bg-[var(--mj-accent-soft)] text-[var(--mj-accent)]'
                              : 'hover:bg-[var(--mj-muted)]'
                          }`}
                        >
                          {locale === 'en' ? child.labelEn : child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-card)] p-4">
          {!selected ? (
            <p className="text-sm text-[var(--mj-muted-fg)]">{d.selectItem}</p>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-lg font-semibold">{d.editEndpoint}</h2>
                <Button size="sm" variant="outline" onClick={removeSelected}>
                  <Trash2 className="me-1 size-3.5" />
                  {d.remove}
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label>{d.labelFa}</Label>
                  <Input
                    value={selected.item.label}
                    onChange={(e) => updateSelected({ label: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>{d.labelEn}</Label>
                  <Input
                    value={selected.item.labelEn}
                    onChange={(e) => updateSelected({ labelEn: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>{d.icon}</Label>
                  <select
                    className="h-10 w-full rounded-xl border border-[var(--mj-border)] bg-transparent px-3 text-sm"
                    value={selected.item.icon}
                    onChange={(e) => updateSelected({ icon: e.target.value })}
                  >
                    {ICON_OPTIONS.map((icon) => (
                      <option key={icon} value={icon}>
                        {icon}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <Label>{d.cssClass}</Label>
                  <Input
                    value={selected.item.className ?? ''}
                    onChange={(e) => updateSelected({ className: e.target.value })}
                  />
                </div>
                {selected.item.type === 'endpoint' ? (
                  <div className="space-y-1">
                    <Label>{d.slug}</Label>
                    <Input
                      value={selected.item.slug ?? ''}
                      onChange={(e) => updateSelected({ slug: e.target.value })}
                    />
                  </div>
                ) : null}
                {selected.item.type === 'link' ? (
                  <div className="space-y-1">
                    <Label>{d.href}</Label>
                    <Input
                      value={selected.item.href ?? ''}
                      onChange={(e) => updateSelected({ href: e.target.value })}
                    />
                  </div>
                ) : null}
              </div>
              <div className="space-y-1">
                <Label>{d.contentFa}</Label>
                <Textarea
                  value={selected.item.content ?? ''}
                  onChange={(e) => updateSelected({ content: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-1">
                <Label>{d.contentEn}</Label>
                <Textarea
                  value={selected.item.contentEn ?? ''}
                  onChange={(e) => updateSelected({ contentEn: e.target.value })}
                  rows={3}
                />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selected.item.enabled}
                  onChange={(e) => updateSelected({ enabled: e.target.checked })}
                />
                {d.enabled}
              </label>
              <div className="space-y-2">
                <Label>{d.rolesAccess}</Label>
                <div className="flex flex-wrap gap-2">
                  {ROLE_OPTIONS.map((role) => {
                    const active = selected.item.roles.includes(role);
                    return (
                      <button
                        key={role}
                        type="button"
                        className={`rounded-lg border px-2 py-1 text-xs ${
                          active
                            ? 'border-[var(--mj-accent)] bg-[var(--mj-accent-soft)] text-[var(--mj-accent)]'
                            : 'border-[var(--mj-border)]'
                        }`}
                        onClick={() => {
                          const roles = active
                            ? selected.item.roles.filter((r) => r !== role)
                            : [...selected.item.roles, role];
                          updateSelected({ roles });
                        }}
                      >
                        {role}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-[var(--mj-muted-fg)]">{d.rolesHint}</p>
              </div>
              {selected.parent && selected.item.type !== 'group' ? null : selected.item.type ===
                'group' ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const child: MyAccountItem = {
                      id: newId('endpoint'),
                      type: 'endpoint',
                      label: 'زیربخش',
                      labelEn: 'Child endpoint',
                      icon: 'Settings',
                      slug: `child-${Date.now().toString(36)}`,
                      enabled: true,
                      order: ((selected.item.children?.length ?? 0) + 1) * 10,
                      roles: [],
                    };
                    updateSelected({
                      children: [...(selected.item.children ?? []), child],
                    });
                    setSelectedId(child.id);
                  }}
                >
                  <Plus className="me-1 size-3.5" />
                  {d.addChild}
                </Button>
              ) : null}
            </div>
          )}
        </section>
      </div>

      <section className="space-y-3 rounded-2xl border border-[var(--mj-border)] bg-[var(--mj-card)] p-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-lg font-semibold">{d.banners}</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              setSettings({
                ...settings,
                banners: [
                  ...settings.banners,
                  {
                    id: newId('banner'),
                    target: 'dashboard',
                    title: 'بنر جدید',
                    titleEn: 'New banner',
                    body: '',
                    bodyEn: '',
                    enabled: true,
                  },
                ],
              })
            }
          >
            <Plus className="me-1 size-3.5" />
            {d.addBanner}
          </Button>
        </div>
        {settings.banners.map((b) => (
          <div
            key={b.id}
            className="grid gap-3 rounded-xl border border-[var(--mj-border)] p-3 sm:grid-cols-2"
          >
            <Input
              placeholder={d.bannerTitleFa}
              value={b.title}
              onChange={(e) => updateBanner(b.id, { title: e.target.value })}
            />
            <Input
              placeholder={d.bannerTitleEn}
              value={b.titleEn}
              onChange={(e) => updateBanner(b.id, { titleEn: e.target.value })}
            />
            <Input
              placeholder={d.bannerBodyFa}
              value={b.body}
              onChange={(e) => updateBanner(b.id, { body: e.target.value })}
            />
            <Input
              placeholder={d.bannerBodyEn}
              value={b.bodyEn}
              onChange={(e) => updateBanner(b.id, { bodyEn: e.target.value })}
            />
            <Input
              placeholder={d.bannerTarget}
              value={b.target}
              onChange={(e) => updateBanner(b.id, { target: e.target.value })}
            />
            <Input
              placeholder={d.bannerHref}
              value={b.href ?? ''}
              onChange={(e) => updateBanner(b.id, { href: e.target.value })}
            />
            <Input
              placeholder={d.bannerImage}
              value={b.imageUrl ?? ''}
              onChange={(e) => updateBanner(b.id, { imageUrl: e.target.value })}
            />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={b.enabled}
                  onChange={(e) => updateBanner(b.id, { enabled: e.target.checked })}
                />
                {d.enabled}
              </label>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  setSettings({
                    ...settings,
                    banners: settings.banners.filter((x) => x.id !== b.id),
                  })
                }
              >
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
