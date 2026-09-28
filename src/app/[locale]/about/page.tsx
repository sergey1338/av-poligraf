import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle2 } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('aboutTitle'), description: t('aboutDescription') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');
  const whyUs = t.raw('whyUs') as string[];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h1>
          <p className="text-lg text-slate-600">{t('subtitle')}</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t('historyTitle')}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">{t('history')}</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t('whatWeDoTitle')}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">{t('whatWeDo')}</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{t('equipmentTitle')}</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">{t('equipment')}</p>
        </div>
        <div className="bg-blue-50 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">{t('whyUsTitle')}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
