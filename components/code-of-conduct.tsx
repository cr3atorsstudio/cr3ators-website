import { useLocale } from "../hooks/useLocale";
import { CodeOfConductJapanese } from "./code-of-conduct-japanese";
import { SecttionH2 } from "./typography/section-h2";
import { SecttionTitle } from "./sections/section-title";

export const CodeOfConduct = () => {
  const locale = useLocale().locale;
  if (locale === "ja") {
    return <CodeOfConductJapanese />;
  }

  if (locale === "en") {
    return <CodeOfConductJapanese />;
  }

  return <CodeOfConductJapanese />;
};
