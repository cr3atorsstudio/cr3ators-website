import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";

import { useEffect } from "react";
import { scrollFadeIn } from "./utils/scroll-fadeIn";

type Profile = {
  name: string;
  job: string;
  pic: string;
  twitter: string;
};

type Props = {
  bgColor?: string;
  isFading: boolean;
  title: string;
  contents: string;
};

const members: Profile[] = [
  {
    name: "Riho",
    job: "Software Engineer",
    pic: "placeholder",
    twitter: "@",
  },
  {
    name: "Risa",
    job: "Software Engineer",
    pic: "placeholder",
    twitter: "@",
  },
  {
    name: "Miho",
    job: "Software Engineer",
    pic: "placeholder",
    twitter: "@",
  },
  {
    name: "Eri",
    job: "Software Engineer",
    pic: "placeholder",
    twitter: "@",
  },
  {
    name: "Manami",
    job: "Entrepreneur",
    pic: "placeholder",
    twitter: "@",
  },
];

const SectionTeam = ({ bgColor, isFading, title, contents }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <div className='pt-10 pb-28'>
          <h3 className='mb-10 text-center text-5xl font-black text-gray-400 lg:text-[2.5rem]'>
            {title}
          </h3>

          <div className='flex w-full flex-col items-center justify-center pt-10 pb-28'>
            <div className='flex w-full flex-col flex-wrap items-center justify-between lg:flex-row lg:pl-4'>
              {members.map((member) => (
                <div className='mx-5 mt-10 flex flex-col  items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-20 w-20'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <p className='text-sm'>{member.name}</p>
                  <p className='text-sm'>{member.job}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </SectionFadeIn>
  );
};

export default SectionTeam;
