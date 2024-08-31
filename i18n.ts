import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./config/i18n";

export default getRequestConfig(async ({ locale }) => {
  let userLocale;

  if (!locales.includes(locale as any)) userLocale = defaultLocale;

  return {
    messages: (await import(`./locales/${userLocale ?? locale}.json`)).default,
  };
});
