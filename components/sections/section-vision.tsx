import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";

import { useEffect } from "react";
import { scrollFadeIn } from "../utils/scroll-fadeIn";
import { useLocale } from "../../hooks/useLocale";
import { SecttionTitle } from "./section-title";

type Props = {
  bgColor?: string;
  isFading: boolean;
};

const SectionVision = ({ bgColor, isFading }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  const t = useLocale().t;

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <SecttionTitle>{t.VISIONTITLE}</SecttionTitle>
        <div className='flex w-2/3 justify-center text-2xl lg:text-3xl'>
          <ol className='list-decimal divide-y-2 divide-gray-100 text-center'>
            <li className='p-5 '>{t.VISION_1}</li>
            <li className='p-5 '>{t.VISION_2}</li>
            <li className='p-5 '>{t.VISION_3}</li>
            <li className='p-5 '>{t.VISION_4}</li>
            <li className='p-5 '>{t.VISION_5}</li>
          </ol>
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionVision;
