"use client";

import { useEffect } from "react";

export function DocumentLanguage({ lang }: { lang: "en" | "ru" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
