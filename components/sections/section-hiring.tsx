import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";
import { useEffect } from "react";
import { scrollFadeIn } from "../utils/scroll-fadeIn";
import { useLocale } from "../../hooks/useLocale";

type Props = {
  bgColor?: string;
  isFading: boolean;
};

const SectionGeneral = ({ bgColor, isFading }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  const t = useLocale().t;

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <h3 className='mb-10 text-center text-3xl font-black text-gray-600 lg:text-4xl'>
          {t.HIRING_TITLE}
        </h3>
        <div className='flex w-3/4 flex-col items-center justify-between text-xl leading-relaxed lg:flex-row lg:pl-4 lg:text-2xl	'>
          {t.HIRING_CONTENTS_1} <br /> <br />
          {t.HIRING_CONTENTS_2}
        </div>
        <div className='md: mt-8 mb-10 flex flex-col items-center justify-center lg:mt-10 lg:flex-row'>
          <a
            href='https://t.co/8oPQLYmjRV'
            target='_blank'
            className=' h-15 mx-3 mb-6 w-60 rounded-md border bg-pink-600 py-3 px-12 text-center font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black md:mb-0 md:h-12 md:px-8'
          >
            {t.APLLY_BUTTON}
          </a>
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionGeneral;
