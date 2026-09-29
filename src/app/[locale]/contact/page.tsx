import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('contactTitle'), description: t('contactDescription') };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h1>
          <p className="text-lg text-slate-600">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">{t('formTitle')}</h2>
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">{t('title')}</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-orange-500 shrink-0" /><span className="text-slate-700">{t('address')}</span></li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-orange-500 shrink-0" /><div><a href="tel:+37379955020" className="text-slate-700 hover:text-blue-700 block">{t('phone1')}</a><a href="tel:+37379033961" className="text-slate-700 hover:text-blue-700 block">{t('phone2')}</a></div></li>
                <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-orange-500 shrink-0" /><div><a href="mailto:avpoligraf@gmail.com" className="text-slate-700 hover:text-blue-700 block">{t('email1')}</a><a href="mailto:designavpoligraf@mail.ru" className="text-slate-700 hover:text-blue-700 block">{t('email2')}</a></div></li>
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500 shrink-0" /><span className="text-slate-700">{t('hours')}</span></li>
                <li className="flex items-center gap-3"><Star className="w-5 h-5 text-orange-500 shrink-0 fill-orange-500" /><span className="text-slate-700">{t('rating')} ★ · {t('reviewsCount')}</span></li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">{t('messengers')}</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/37379955020" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600">WhatsApp</a>
                <a href="viber://chat?number=%2B37379955020" className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-lg hover:bg-purple-600">Viber</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">{t('mapTitle')}</h3>
              <MapEmbed className="h-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
