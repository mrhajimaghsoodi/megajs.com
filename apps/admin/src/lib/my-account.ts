/** YITH Customize My Account–style defaults for MEGA JS user panel */

export type MyAccountItemType = 'endpoint' | 'group' | 'link';

export type MyAccountItem = {
  id: string;
  type: MyAccountItemType;
  label: string;
  labelEn: string;
  icon: string;
  /** Internal route key under /profile or absolute/external href for links */
  slug?: string;
  href?: string;
  content?: string;
  contentEn?: string;
  className?: string;
  enabled: boolean;
  order: number;
  /** empty = all authenticated roles */
  roles: string[];
  openInNewTab?: boolean;
  children?: MyAccountItem[];
};

export type MyAccountBanner = {
  id: string;
  /** endpoint id or "dashboard" / "*" */
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
  /** sidebar start/end relative to writing direction */
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

export const DEFAULT_MY_ACCOUNT: MyAccountSettings = {
  enabled: true,
  layout: 'sidebar',
  sidebarPosition: 'start',
  ajax: true,
  emailVerification: {
    enabled: false,
    blockLogin: true,
    blockPurchase: true,
  },
  captcha: {
    enabled: false,
  },
  colors: {
    menuBg: '#ffffff',
    menuText: '#1e1e1e',
    menuActiveBg: '#704fe6',
    menuActiveText: '#ffffff',
    contentBg: '#ffffff',
    accent: '#704fe6',
  },
  banners: [
    {
      id: 'dash-welcome',
      target: 'dashboard',
      title: 'به پنل یادگیری خوش آمدید',
      titleEn: 'Welcome to your learning account',
      body: 'پیشرفت، سفارش‌ها و کیف توکن را از همینجا مدیریت کنید.',
      bodyEn: 'Track progress, orders, and your token wallet from here.',
      href: '/learn',
      enabled: true,
    },
  ],
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
      className: 'endpoint-dashboard',
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
      className: 'endpoint-learning',
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
      className: 'endpoint-orders',
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
      className: 'endpoint-wallet',
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
      className: 'endpoint-practice',
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
      className: 'endpoint-live',
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
      className: 'endpoint-support',
    },
    {
      id: 'account-group',
      type: 'group',
      label: 'حساب کاربری',
      labelEn: 'Account',
      icon: 'Folder',
      enabled: true,
      order: 80,
      roles: [],
      className: 'group-account',
      children: [
        {
          id: 'settings',
          type: 'endpoint',
          label: 'تنظیمات',
          labelEn: 'Settings',
          icon: 'Settings',
          slug: 'settings',
          enabled: true,
          order: 10,
          roles: [],
          className: 'endpoint-settings',
        },
        {
          id: 'shop-link',
          type: 'link',
          label: 'فروشگاه دوره‌ها',
          labelEn: 'Course shop',
          icon: 'ExternalLink',
          href: '/learn',
          enabled: true,
          order: 20,
          roles: [],
          className: 'link-shop',
        },
      ],
    },
  ],
};

export function mergeMyAccountSettings(raw?: unknown): MyAccountSettings {
  if (!raw || typeof raw !== 'object') return structuredClone(DEFAULT_MY_ACCOUNT);
  const incoming = raw as Partial<MyAccountSettings>;
  return {
    ...DEFAULT_MY_ACCOUNT,
    ...incoming,
    emailVerification: {
      ...DEFAULT_MY_ACCOUNT.emailVerification,
      ...(incoming.emailVerification ?? {}),
    },
    captcha: {
      ...DEFAULT_MY_ACCOUNT.captcha,
      ...(incoming.captcha ?? {}),
    },
    colors: {
      ...DEFAULT_MY_ACCOUNT.colors,
      ...(incoming.colors ?? {}),
    },
    banners: Array.isArray(incoming.banners)
      ? incoming.banners
      : DEFAULT_MY_ACCOUNT.banners,
    items: Array.isArray(incoming.items) ? incoming.items : DEFAULT_MY_ACCOUNT.items,
  };
}
