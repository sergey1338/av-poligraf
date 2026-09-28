import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Clock, MapPin, Palette, Award, Calendar, Layers, Printer, Image as ImageIcon, FileText, Paintbrush, Frame, BookOpen } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('homeTitle'), description: t('homeDescription') };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Hero');
  const tAdv = await getTranslations('Advantages');
  const tServ = await getTranslations('Services');
  const tPort = await getTranslations('Portfolio');
  const tTrust = await getTranslations('Trust');
  const tContact = await getTranslations('Contact');

  const advantages = [
    { key: 'speed', icon: Clock },
    { key: 'local', icon: MapPin },
    { key: 'fullCycle', icon: Palette },
    { key: 'quality', icon: Award },
    { key: 'experience', icon: Calendar },
    { key: 'range', icon: Layers },
  ] as const;

  const services = [
    { key: 'businessCards', icon: Printer },
    { key: 'banners', icon: ImageIcon },
    { key: 'booklets', icon: FileText },
    { key: 'design', icon: Paintbrush },
    { key: 'canvas', icon: Frame },
    { key: 'lamination', icon: BookOpen },
  ] as const;

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{t('title')}</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">{t('subtitle')}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg">{t('ctaQuote')}</Link>
              <Link href="/portfolio" className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20">{t('ctaPortfolio')}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">{tAdv('title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ key, icon: Icon }) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-blue-700" /></div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{tAdv(`items.${key}.title`)}</h3>
                <p className="text-slate-600 text-sm">{tAdv(`items.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{tServ('title')}</h2>
            <Link href="/services" className="hidden sm:inline-flex text-blue-700 font-medium">{tServ('viewAll')} →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ key, icon: Icon }) => (
              <Link key={key} href="/services" className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-orange-600" /></div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{tServ(`items.${key}.title`)}</h3>
                <p className="text-slate-600 text-sm mb-4">{tServ(`items.${key}.desc`)}</p>
                <div className="text-sm font-medium text-blue-700">{tServ('from')} {tServ(`items.${key}.price`)} {tServ('lei')}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div><div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">15+</div><div className="text-blue-100">{tTrust('years')}</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">5000+</div><div className="text-blue-100">{tTrust('orders')}</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">1200+</div><div className="text-blue-100">{tTrust('clients')}</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tContact('subtitle')}</h2>
            <Link href="/contact" className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl">{tContact('submit')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
