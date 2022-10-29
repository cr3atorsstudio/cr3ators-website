import { useLocale } from "../hooks/useLocale";
import CodeOfConductJapanese from "./CodeOfConductJapanese";

const CodeOfConduct = () => {
  const locale = useLocale().locale;
  if (locale === "ja") {
    return <CodeOfConductJapanese />;
  }

  if (locale === "en") {
    return <CodeOfConductJapanese />;
  }

  return <CodeOfConductJapanese />;
};

export default CodeOfConduct;
