import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";

import { useEffect } from "react";
import { scrollFadeIn } from "./utils/scroll-fadeIn";
import { useLocale } from "../hooks/useLocale";

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
    pic: "/riho.jpeg",
    twitter: "rllllho",
  },
  {
    name: "Risa",
    job: "Software Engineer",
    pic: "/risa.jpeg",
    twitter: "risacan_eth",
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
    pic: "/eri2490.jpg",
    twitter: "eri2490",
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
  const t = useLocale().t;

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <div className='pt-10 pb-28'>
          <h3 className='mb-10 text-center text-5xl font-black text-gray-400 lg:text-[2.5rem]'>
            {t.TEAMTITLE}
          </h3>

          <div className='justify-center8 flex w-full flex-col items-center'>
            <div className='flex w-full flex-col flex-wrap items-center justify-between lg:flex-row lg:pl-4'>
              {members.map((member, index) => (

                <div
                  className='mx-5 mb-10 flex flex-col  items-center justify-center'
                  key={index}
                >
                <img
                  src={member.pic}
                  width="100px"
                  height="100px"
                  alt={`${member.name}'s image`}
                />
                <p className='text-sm'>{member.name}</p>
                <p className='text-sm'>{member.job}</p>
                <p className="text-sm hover:underline"><a href={`https://twitter.com/${member.twitter}`} target="_blank">@{member.twitter}</a></p>
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
