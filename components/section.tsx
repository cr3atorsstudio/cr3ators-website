import SectionContainer from "./section-container";
import { useEffect } from "react";
import { scrollFadeIn } from "./scrollFadeIn";

type Props = {
  bgColor?: string;
  isFading: boolean;
  title: string;
  contents: string;
  type: string;
};

const Section = ({ bgColor, isFading, title, contents, type }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <div
      className={`${bgColor ? bgColor : "bg-neutral-50"} ${
        isFading &&
        "js-show-on-scroll flex justify-center rounded-lg w-4/5 overflow-hidden shadow-lg"
      }`}
    >
      <SectionContainer>
        <div className='pt-10 pb-10 flex flex-col items-center justify-center w-full px-1 font-mono'>
          <h3 className='text-5xl lg:text-[2.5rem] font-black text-center mb-10 text-gray-600'>
            {title}
          </h3>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:pl-4 text-lg'>
            {type === "introduction" ? (
              <>
                <div className='flex flex-col items-center justify-center w-2/5 self-start mt-10'>
                  <p className='text-5xl mb-5'>🙎‍♀️</p>
                  <h2 className='font-bold text-2xl text-gray-600'>
                    Get women and gender minorities into Web3
                  </h2>
                  <p className='mt-5 text-xl'>
                    Provide web3 information through Twitter, News Letters, and
                    Twitter Spaces (AMA) Get women and gender minorities into
                    the world of Web3
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center mx-10 w-2/5 self-start mt-10'>
                  <p className='text-5xl mb-5'>💗</p>
                  <h2 className='font-bold text-2xl text-gray-600'>
                    Help "Creators" to build their ideas come to life
                  </h2>
                  <p className='mt-5 text-xl'>
                    90% of the core members have experience in general web and
                    web3 development. We all support beginners.
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center w-2/5 self-start mt-10'>
                  <p className='text-5xl mb-5'>💌</p>
                  <h2 className='font-bold text-2xl text-gray-600'>
                    Support women who don't have time
                  </h2>
                  <p className='mt-5 text-xl'>
                    Women are busy. They don't have time to catch up. We welcome
                    such people in the role of "Supporter". We help them by
                    sharing the information / giving chance to feedback /
                    hanging out in the community.
                  </p>
                </div>
              </>
            ) : (
              <p>{contents}</p>
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Section;
