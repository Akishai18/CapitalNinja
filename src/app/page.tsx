'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would check authentication status here
    // For now, we'll just redirect to auth
    router.push('/auth');
  }, [router]);

  return null; // This page will redirect immediately
}
