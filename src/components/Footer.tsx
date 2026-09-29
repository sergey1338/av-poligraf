'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const tContact = useTranslations('Contact');
  const tCalc = useTranslations('Calculator');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">A&V</div>
              <div>
                <div className="font-bold text-white text-lg">A&V Poligraf</div>
                <div className="text-xs text-slate-400">SRL · Comrat</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">{t('tagline')}</p>
            <p className="text-sm text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" />
              {tContact('address')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">{tNav('home')}</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition-colors">{tNav('services')}</Link></li>
              <li><Link href="/calculator" className="hover:text-orange-400 transition-colors">{tCalc('nav')}</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-400 transition-colors">{tNav('portfolio')}</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">{tNav('about')}</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">{tNav('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">{t('contacts')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-400 shrink-0" /><a href="tel:+37379955020" className="hover:text-orange-400">{tContact('phone1')}</a></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-400 shrink-0" /><a href="tel:+37379033961" className="hover:text-orange-400">{tContact('phone2')}</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-400 shrink-0" /><a href="mailto:avpoligraf@gmail.com" className="hover:text-orange-400">{tContact('email1')}</a></li>
              <li className="text-slate-400">{tContact('hours')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div>{t('rights', { year })}</div>
          <a href="https://www.instagram.com/digitalsled.md/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">{t('madeBy')}</a>
        </div>
      </div>
    </footer>
  );
}
