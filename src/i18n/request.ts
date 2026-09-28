import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

import ru from '../messages/ru.json';
import ro from '../messages/ro.json';

const messagesMap = {
  ru,
  ro,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'ru' | 'ro')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesMap[locale as 'ru' | 'ro'],
  };
});
