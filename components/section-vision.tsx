import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";

import { useEffect } from "react";
import { scrollFadeIn } from "./utils/scroll-fadeIn";

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

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <h3 className='mb-10 text-center text-4xl font-black text-gray-600 lg:text-5xl'>
          {title}
        </h3>
        <div className='flex w-2/3 justify-center text-xl lg:text-2xl'>
          <ol className='list-decimal divide-y-2 divide-gray-100'>
            <li className='p-3 '>Learn by building.</li>
            <li className='p-3 '>Be creative in "Web3" field</li>
            <li className='p-3 '>
              Give "Creators" the first experiece of launching the actual
              product
            </li>
            <li className='p-3 '>
              Provide a learning environment for womxn who didn't pick "Web3"
              for the day
            </li>
            <li className='p-3 '>Close the gender gap in "Web3"</li>
          </ol>
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionVision;
