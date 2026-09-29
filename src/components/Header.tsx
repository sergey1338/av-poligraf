'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const tCalc = useTranslations('Calculator');
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/services', label: t('services') },
    { href: '/calculator', label: tCalc('nav') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const switchLocale = (newLocale: 'ru' | 'ro') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold text-lg">A&V</div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900 text-lg leading-tight">A&V Poligraf</div>
              <div className="text-xs text-slate-500">Comrat · 2008</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn('px-3 py-2 rounded-md text-sm font-medium transition-colors', pathname === item.href ? 'text-blue-800 bg-blue-50' : 'text-slate-700 hover:text-blue-800 hover:bg-slate-50')}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-800 rounded-md">
                {locale.toUpperCase()}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[80px] overflow-hidden z-50">
                <button onClick={() => switchLocale('ru')} className={cn('block w-full text-left px-3 py-2 text-sm hover:bg-slate-50', locale === 'ru' && 'bg-blue-50 text-blue-800 font-medium')}>RU</button>
                <button onClick={() => switchLocale('ro')} className={cn('block w-full text-left px-3 py-2 text-sm hover:bg-slate-50', locale === 'ro' && 'bg-blue-50 text-blue-800 font-medium')}>RO</button>
              </div>
            </div>

            <a href="tel:+37379955020" className="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-800">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{t('phone')}</span>
            </a>

            <Link href="/contact" className="hidden sm:inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg">
              {t('getQuote')}
            </Link>

            <button className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 py-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={cn('px-3 py-2.5 rounded-md text-base font-medium', pathname === item.href ? 'text-blue-800 bg-blue-50' : 'text-slate-700 hover:bg-slate-50')}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mx-3 mt-2 text-center px-4 py-2.5 bg-orange-500 text-white font-semibold rounded-lg">
                {t('getQuote')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
