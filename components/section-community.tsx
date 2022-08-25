import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";
import { useEffect } from "react";
import { scrollFadeIn } from "./utils/scroll-fadeIn";

type Props = {
  bgColor?: string;
  isFading: boolean;
  title: string;
};

type Content = {
  title: string;
  emoji: string;
  description: string;
};

const SectionCommunity = ({ bgColor, isFading, title }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  const contents: Content[] = [
    {
      title: "Get women and gender minorities into Web3",
      emoji: "🙎‍♀️",
      description:
        "Provide web3 information through Twitter, News Letters, and Twitter Spaces (AMA) Get women and gender minorities into the world of Web3",
    },
    {
      title: "Help 'Creators' to build their ideas come to life",
      emoji: "💗",
      description:
        "90% of the core members have experience in general web and web3 development. We all support beginners.",
    },
    {
      title: "Support women who don't have time",
      emoji: "💌",
      description:
        " Women are busy. They don't have time to catch up. We welcome such people in the role of 'Supporter'. We help them by sharing the information / giving chance to feedback / hanging out in the community.",
    },
  ];

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <h3 className='mb-10 text-center text-4xl font-black text-gray-600 xl:text-[2.5rem]'>
          {title}
        </h3>
        <div className='flex flex-col items-center justify-between text-lg xl:flex-row xl:pl-4'>
          {contents.map((content, index) => {
            return (
              <div
                key={index}
                className='mt-14 flex flex-col items-center justify-center px-5 md:self-start lg:px-10 xl:w-2/5'
              >
                <p className='mb-5 text-5xl'>{content.emoji}</p>
                <h2 className='text-2xl font-bold text-gray-600 lg:text-3xl'>
                  {content.title}
                </h2>
                <p className='mt-5 text-xl lg:text-2xl'>
                  {content.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionCommunity;
