import SectionContainer from "./section-container";
import { useEffect } from "react";
import { scrollFadeIn } from "./scrollFadeIn";
import placeholder from "../public/assets/blog/authors/jj.jpeg";
import { StaticImageData } from "next/image";

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
    <div
      className={`${bgColor ? bgColor : "bg-neutral-50"} ${
        isFading &&
        "js-show-on-scroll flex justify-center rounded-lg w-3/4 overflow-hidden shadow-lg"
      }`}
    >
      <SectionContainer>
        <div className='pt-10 pb-28'>
          <h3 className='text-5xl lg:text-[2.5rem] font-black text-center mb-10 text-gray-400'>
            {title}
          </h3>
          <div className='pt-10 pb-28 flex flex-col items-center justify-center w-full'>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:pl-4 w-full'>
              {members.map((member) => (
                <div className='flex flex-col mt-10 justify-center items-center'>
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
    </div>
  );
};

export default SectionTeam;
