'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/** WooCommerce → Settings redirects into unified Settings suite */
export default function WooSettingsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/settings?tab=woocommerce');
  }, [router]);
  return null;
}
