import SectionContainer from "./section-container";
import SectionFadeIn from "./section-fade-in";

import { useEffect } from "react";
import { scrollFadeIn } from "../utils/scroll-fadeIn";
import { useLocale } from "../../hooks/useLocale";
import { SecttionTitle } from "./section-title";

type Profile = {
  name: string;
  job: string;
  pic: string;
  twitter: string;
};

type Props = {
  bgColor?: string;
  isFading: boolean;
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
    pic: "/miho.png",
    twitter: "pluto_04",
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
    pic: "/placeholder.png",
    twitter: "manaminoreal",
  },
];

const SectionTeam = ({ bgColor, isFading }: Props) => {
  useEffect(() => {
    scrollFadeIn();
  }, []);
  const t = useLocale().t;

  return (
    <SectionFadeIn bgColor={bgColor} isFading={isFading}>
      <SectionContainer>
        <div className='pt-10 pb-28'>
          <SecttionTitle>{t.TEAMTITLE}</SecttionTitle>

          <div className='justify-center8 flex w-full flex-col items-center font-mono'>
            <div className='flex w-full flex-col flex-wrap items-center justify-between md:mt-16 lg:flex-row lg:pl-4'>
              {members.map((member, index) => (
                <div
                  className='mx-5 mb-10 flex flex-col  items-center justify-center'
                  key={index}
                >
                  <img
                    src={member.pic}
                    width='150px'
                    height='150px'
                    alt={`${member.name}'s image`}
                    className='rounded-lg'
                  />
                  <p className='mt-2 font-bold'>{member.name}</p>
                  <p>{member.job}</p>
                  <p className='hover:underline'>
                    <a
                      href={`https://twitter.com/${member.twitter}`}
                      target='_blank'
                    >
                      @{member.twitter}
                    </a>
                  </p>
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
