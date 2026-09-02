"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { defaultLocale, dictionaries } from "./index";
import type { Locale } from "./types";

interface LanguageContextValue {
  locale: Locale;
  t: (typeof dictionaries)[Locale];
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "naghiliviu-locale";

const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((listener) => listener());
}
function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
function getSnapshot(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ro") return stored;
  return window.navigator.language.toLowerCase().startsWith("ro") ? "ro" : "en";
}
function getServerSnapshot(): Locale {
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    notify();
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(getSnapshot() === "en" ? "ro" : "en");
  }, [setLocale]);

  return (
    <LanguageContext.Provider value={{ locale, t: dictionaries[locale], setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
