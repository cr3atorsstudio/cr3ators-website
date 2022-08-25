import en from "../language/en";
import ja from "../language/ja";

import { useRouter } from "next/router";
export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;
  return { locale, t };
};
