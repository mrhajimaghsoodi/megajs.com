'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Legacy /billing route → Woo-style /orders */
export default function BillingRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/orders');
  }, [router]);
  return null;
}
