'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

type ServiceKey = 'businessCards' | 'banners' | 'booklets' | 'design' | 'canvas' | 'lamination';

const PRICES: Record<ServiceKey, { base: number; unit: 'qty' | 'm2'; min: number }> = {
  businessCards: { base: 3, unit: 'qty', min: 50 },
  banners: { base: 80, unit: 'm2', min: 1 },
  booklets: { base: 1.5, unit: 'qty', min: 50 },
  design: { base: 300, unit: 'qty', min: 1 },
  canvas: { base: 120, unit: 'm2', min: 1 },
  lamination: { base: 5, unit: 'qty', min: 1 },
};

export default function PriceCalculator() {
  const t = useTranslations('Calculator');
  const tServ = useTranslations('Services.items');
  const [service, setService] = useState<ServiceKey>('businessCards');
  const [qty, setQty] = useState(100);
  const [option, setOption] = useState<'std' | 'premium'>('std');

  const estimate = useMemo(() => {
    const cfg = PRICES[service];
    const q = Math.max(qty, cfg.min);
    let total = cfg.base * q;
    if (option === 'premium') total *= 1.35;
    return Math.round(total);
  }, [service, qty, option]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('service')}</label>
          <select value={service} onChange={(e) => setService(e.target.value as ServiceKey)} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white outline-none focus:border-blue-500">
            {(Object.keys(PRICES) as ServiceKey[]).map((k) => (
              <option key={k} value={k}>{tServ(`${k}.title`)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('quantity')}</label>
          <input type="number" min={1} value={qty} onChange={(e) => setQty(Number(e.target.value) || 1)} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none focus:border-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('options')}</label>
          <div className="flex gap-3">
            <button type="button" onClick={() => setOption('std')} className={`px-4 py-2 rounded-xl text-sm font-medium border ${option === 'std' ? 'bg-blue-800 text-white border-blue-800' : 'bg-white text-slate-700 border-slate-300'}`}>Standard</button>
            <button type="button" onClick={() => setOption('premium')} className={`px-4 py-2 rounded-xl text-sm font-medium border ${option === 'premium' ? 'bg-blue-800 text-white border-blue-800' : 'bg-white text-slate-700 border-slate-300'}`}>Premium</button>
          </div>
        </div>
      </div>
      <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
        <div className="text-sm text-slate-600 mb-1">{t('result')}</div>
        <div className="text-3xl font-bold text-blue-900">{t('from')} {estimate} {t('lei')}</div>
        <p className="text-xs text-slate-500 mt-2">{t('note')}</p>
        <Link href="/contact" className="inline-flex mt-4 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl">{t('cta')}</Link>
      </div>
    </div>
  );
}
