import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Clock, Tag } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesList' });
  return {
    title: `${t('banners.title')} | A&V Poligraf Comrat`,
    description: t('banners.full').slice(0, 160),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ServicesList');
  const tServ = await getTranslations('Services');
  const tContact = await getTranslations('Contact');

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/services" className="hover:text-blue-700">{tServ('pageTitle')}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{t('banners.title')}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('banners.title')}</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">{t('banners.full')}</p>
        <div className="flex flex-wrap gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2 text-slate-600"><Clock className="w-5 h-5 text-orange-500" />{tServ('deadline')}: {t('banners.deadline')}</div>
          <div className="flex items-center gap-2 font-medium text-blue-800"><Tag className="w-5 h-5" />{t('banners.price')}</div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-6 mb-8">
          <p className="text-sm text-slate-600 mb-1">{tContact('address')}</p>
          <p className="text-sm text-slate-600 mb-3">{tContact('hours')}</p>
          <a href="tel:+37379955020" className="text-blue-800 font-medium">{tContact('phone1')}</a>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl">{tServ('order')}</Link>
          <Link href="/calculator" className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl">Calculator</Link>
        </div>
      </div>
    </div>
  );
}
