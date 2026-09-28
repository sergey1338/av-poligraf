'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Image as ImageIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ITEMS = [
  { id: '1', category: 'cards' },
  { id: '2', category: 'banners' },
  { id: '3', category: 'print' },
  { id: '4', category: 'design' },
  { id: '5', category: 'banners' },
  { id: '6', category: 'print' },
  { id: '7', category: 'cards' },
  { id: '8', category: 'banners' },
] as const;

const FILTERS = ['all', 'cards', 'banners', 'print', 'design'] as const;

export default function PortfolioGallery() {
  const t = useTranslations('Portfolio');
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === 'all' ? ITEMS : ITEMS.filter((i) => i.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              filter === f ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            )}
          >
            {f === 'all' ? t('filterAll') : t(`filters.${f}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item.id)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-sm text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
              <ImageIcon className="w-16 h-16 text-slate-400" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-white font-semibold">{t(`items.${item.id}.title`)}</h3>
              <p className="text-slate-300 text-sm mt-1">{t(`items.${item.id}.desc`)}</p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center mb-4">
              <ImageIcon className="w-20 h-20 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{t(`items.${lightbox}.title`)}</h3>
            <p className="text-slate-600 mt-2">{t(`items.${lightbox}.desc`)}</p>
          </div>
        </div>
      )}
    </>
  );
}
