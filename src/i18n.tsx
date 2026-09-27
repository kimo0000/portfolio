// Gestion de la langue (FR / EN), mémorisée dans le navigateur.
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang, Text } from './content';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (text: Text) => string };
const LangContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    /* stockage indisponible */
  }
  return navigator.language?.startsWith('fr') ? 'fr' : navigator.language ? 'en' : 'fr';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* stockage indisponible */
    }
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang, t: (text) => text[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang doit être utilisé dans LangProvider');
  return ctx;
}
