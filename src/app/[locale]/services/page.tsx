import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Printer, Image as ImageIcon, FileText, Paintbrush, Frame, BookOpen, Clock, Tag } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('servicesTitle'), description: t('servicesDescription') };
}

const serviceKeys = [
  { key: 'businessCards', icon: Printer },
  { key: 'banners', icon: ImageIcon },
  { key: 'booklets', icon: FileText },
  { key: 'design', icon: Paintbrush },
  { key: 'canvas', icon: Frame },
  { key: 'finishing', icon: BookOpen },
] as const;

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Services');
  const tList = await getTranslations('ServicesList');

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('pageTitle')}</h1>
          <p className="text-lg text-slate-600">{t('pageSubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceKeys.map(({ key, icon: Icon }) => (
            <div key={key} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><Icon className="w-7 h-7 text-blue-700" /></div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">{tList(`${key}.title`)}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{tList(`${key}.full`)}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-500"><Clock className="w-4 h-4" /><span>{t('deadline')}: {tList(`${key}.deadline`)}</span></div>
                    <div className="flex items-center gap-1.5 text-blue-700 font-medium"><Tag className="w-4 h-4" /><span>{tList(`${key}.price`)}</span></div>
                  </div>
                  <Link href="/contact" className="inline-flex mt-4 text-sm font-semibold text-orange-600">{t('order')} →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
