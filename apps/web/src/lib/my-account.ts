/** Client-side types + helpers mirroring API my-account settings */

export type MyAccountItemType = 'endpoint' | 'group' | 'link';

export type MyAccountItem = {
  id: string;
  type: MyAccountItemType;
  label: string;
  labelEn: string;
  icon: string;
  slug?: string;
  href?: string;
  content?: string;
  contentEn?: string;
  className?: string;
  enabled: boolean;
  order: number;
  roles: string[];
  openInNewTab?: boolean;
  children?: MyAccountItem[];
};

export type MyAccountBanner = {
  id: string;
  target: string;
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
  imageUrl?: string;
  href?: string;
  enabled: boolean;
};

export type MyAccountSettings = {
  enabled: boolean;
  layout: 'sidebar' | 'tabs';
  sidebarPosition: 'start' | 'end';
  ajax: boolean;
  emailVerification: {
    enabled: boolean;
    blockLogin: boolean;
    blockPurchase: boolean;
  };
  captcha: {
    enabled: boolean;
  };
  colors: {
    menuBg: string;
    menuText: string;
    menuActiveBg: string;
    menuActiveText: string;
    contentBg: string;
    accent: string;
  };
  banners: MyAccountBanner[];
  items: MyAccountItem[];
};

export const FALLBACK_MY_ACCOUNT: MyAccountSettings = {
  enabled: true,
  layout: 'sidebar',
  sidebarPosition: 'start',
  ajax: true,
  emailVerification: { enabled: false, blockLogin: true, blockPurchase: true },
  captcha: { enabled: false },
  colors: {
    menuBg: '#ffffff',
    menuText: '#1e1e1e',
    menuActiveBg: '#704fe6',
    menuActiveText: '#ffffff',
    contentBg: '#ffffff',
    accent: '#704fe6',
  },
  banners: [],
  items: [
    {
      id: 'dashboard',
      type: 'endpoint',
      label: 'پیشخوان',
      labelEn: 'Dashboard',
      icon: 'LayoutDashboard',
      slug: '',
      enabled: true,
      order: 10,
      roles: [],
    },
    {
      id: 'learning',
      type: 'endpoint',
      label: 'یادگیری',
      labelEn: 'Learning',
      icon: 'GraduationCap',
      slug: 'learning',
      enabled: true,
      order: 20,
      roles: [],
    },
    {
      id: 'orders',
      type: 'endpoint',
      label: 'سفارش‌ها',
      labelEn: 'Orders',
      icon: 'ShoppingBag',
      slug: 'orders',
      enabled: true,
      order: 30,
      roles: [],
    },
    {
      id: 'wallet',
      type: 'endpoint',
      label: 'کیف توکن',
      labelEn: 'Token wallet',
      icon: 'Wallet',
      slug: 'wallet',
      enabled: true,
      order: 40,
      roles: [],
    },
    {
      id: 'practice',
      type: 'endpoint',
      label: 'تمرین‌ها',
      labelEn: 'Practice',
      icon: 'Code2',
      slug: 'practice',
      enabled: true,
      order: 50,
      roles: [],
    },
    {
      id: 'live',
      type: 'endpoint',
      label: 'لایوها',
      labelEn: 'Live',
      icon: 'Radio',
      slug: 'live',
      enabled: true,
      order: 60,
      roles: [],
    },
    {
      id: 'support',
      type: 'endpoint',
      label: 'پشتیبانی',
      labelEn: 'Support',
      icon: 'LifeBuoy',
      slug: 'support',
      enabled: true,
      order: 70,
      roles: [],
    },
    {
      id: 'settings',
      type: 'endpoint',
      label: 'تنظیمات',
      labelEn: 'Settings',
      icon: 'Settings',
      slug: 'settings',
      enabled: true,
      order: 80,
      roles: [],
    },
  ],
};

export function itemLabel(item: MyAccountItem, locale: string) {
  return locale === 'en' ? item.labelEn || item.label : item.label;
}

export function bannerCopy(b: MyAccountBanner, locale: string) {
  return {
    title: locale === 'en' ? b.titleEn || b.title : b.title,
    body: locale === 'en' ? b.bodyEn || b.body : b.body,
  };
}

export function flattenEnabledItems(items: MyAccountItem[], role?: string | null): MyAccountItem[] {
  const sorted = [...items].sort((a, b) => a.order - b.order);
  const out: MyAccountItem[] = [];
  for (const item of sorted) {
    if (!item.enabled) continue;
    if (item.roles?.length && role && !item.roles.includes(role) && role !== 'super_admin') {
      continue;
    }
    if (item.type === 'group') {
      out.push({
        ...item,
        children: flattenEnabledItems(item.children ?? [], role),
      });
    } else {
      out.push(item);
    }
  }
  return out;
}

export function endpointHref(locale: string, item: MyAccountItem) {
  if (item.type === 'link' && item.href) {
    if (item.href.startsWith('http')) return item.href;
    return `/${locale}${item.href.startsWith('/') ? item.href : `/${item.href}`}`;
  }
  const slug = item.slug ?? '';
  return slug ? `/${locale}/profile/${slug}` : `/${locale}/profile`;
}

export function activeEndpointId(pathname: string, locale: string, items: MyAccountItem[]): string {
  const base = `/${locale}/profile`;
  const flat: MyAccountItem[] = [];
  const walk = (list: MyAccountItem[]) => {
    for (const i of list) {
      if (i.type === 'group') walk(i.children ?? []);
      else flat.push(i);
    }
  };
  walk(items);
  const endpoints = flat
    .filter((i) => i.type === 'endpoint')
    .sort((a, b) => (b.slug?.length ?? 0) - (a.slug?.length ?? 0));
  for (const ep of endpoints) {
    const href = endpointHref(locale, ep);
    if (pathname === href || (href !== base && pathname.startsWith(href + '/'))) {
      return ep.id;
    }
  }
  return 'dashboard';
}
