import { getTranslations, setRequestLocale } from 'next-intl/server';
import PriceCalculator from '@/components/PriceCalculator';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Calculator' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Calculator');

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t('title')}</h1>
        <p className="text-lg text-slate-600 mb-10">{t('subtitle')}</p>
        <PriceCalculator />
      </div>
    </div>
  );
}
