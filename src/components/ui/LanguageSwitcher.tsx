'use client';

import { useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState<'en' | 'ar'>('en');

  function toggleLocale() {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);

    // Set the cookie with the new locale
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Refresh the page to apply the new language
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      style={{ cursor: 'pointer', background: 'none', border: 'none' }}
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
