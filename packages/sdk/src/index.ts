export type ApiClientOptions = {
  baseUrl: string;
  getAccessToken?: () => string | null | Promise<string | null>;
};

async function request<T>(
  options: ApiClientOptions,
  path: string,
  init?: RequestInit,
): Promise<T> {
  const token = options.getAccessToken
    ? await options.getAccessToken()
    : null;
  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const res = await fetch(`${options.baseUrl}${path}`, {
    ...init,
    headers,
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API ${res.status}: ${body}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export function createApiClient(options: ApiClientOptions) {
  return {
    health: () => request<{ status: string }>(options, '/health'),
    tracks: {
      list: (locale = 'fa') =>
        request<unknown[]>(options, `/catalog/tracks?locale=${locale}`),
      bySlug: (slug: string, locale = 'fa') =>
        request<unknown>(options, `/catalog/tracks/${slug}?locale=${locale}`),
    },
    courses: {
      bySlug: (slug: string, locale = 'fa') =>
        request<unknown>(options, `/catalog/courses/${slug}?locale=${locale}`),
    },
    auth: {
      requestOtp: (phone: string) =>
        request<{ ok: boolean; devCode?: string }>(options, '/auth/otp/request', {
          method: 'POST',
          body: JSON.stringify({ phone }),
        }),
      verifyOtp: (phone: string, code: string) =>
        request<{ accessToken: string }>(options, '/auth/otp/verify', {
          method: 'POST',
          body: JSON.stringify({ phone, code }),
        }),
      me: () => request<unknown>(options, '/auth/me'),
    },
    wallet: {
      get: () => request<{ balance: number }>(options, '/wallet'),
      ledger: () => request<unknown[]>(options, '/wallet/ledger'),
      redeem: (tokens: number, target: 'subscription' | 'course', targetId: string) =>
        request<unknown>(options, '/wallet/redeem', {
          method: 'POST',
          body: JSON.stringify({ tokens, target, targetId }),
        }),
    },
    practice: {
      list: (locale = 'fa') =>
        request<unknown[]>(options, `/practice/challenges?locale=${locale}`),
      submit: (slug: string, code: string) =>
        request<unknown>(options, `/practice/challenges/${slug}/submit`, {
          method: 'POST',
          body: JSON.stringify({ code }),
        }),
    },
    billing: {
      plans: () => request<unknown[]>(options, '/billing/plans'),
      checkoutSubscription: (planCode: string, tokenSpend = 0) =>
        request<unknown>(options, '/billing/checkout/subscription', {
          method: 'POST',
          body: JSON.stringify({ planCode, tokenSpend }),
        }),
    },
  };
}

export type MegajsApiClient = ReturnType<typeof createApiClient>;
