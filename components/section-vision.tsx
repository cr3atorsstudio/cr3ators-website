import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";

import { useEffect } from "react";
import { scrollFadeIn } from "./utils/scroll-fadeIn";
import { useLocale } from "../hooks/useLocale";

type Props = {
  bgColor?: string;
  isFading: boolean;
  title: string;
  contents: string;
  type?: string;
};

const SectionVision = ({ bgColor, isFading, title, contents, type }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  const t = useLocale().t;

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <h3 className='mb-10 text-center text-4xl font-black text-gray-600 lg:text-5xl'>
          {t.VISIONTITLE}
        </h3>
        <div className='flex w-2/3 justify-center text-2xl lg:text-3xl'>
          <ol className='list-decimal divide-y-2 divide-gray-100'>
            <li className='p-5 '>{t.VISION_1}</li>
            <li className='p-5 '>{t.VISION_2}</li>
            <li className='p-5 '>{t.VISION_5}</li>
            <li className='p-5 '>{t.VISION_4}</li>
            <li className='p-5 '>{t.VISION_5}</li>
          </ol>
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionVision;
