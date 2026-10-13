'use client';

import dynamic from 'next/dynamic';

const ThreeDBackground = dynamic(() => import('@/components/3DBackground'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
  ),
});

export default function BackgroundCanvas() {
  return <ThreeDBackground />;
}
