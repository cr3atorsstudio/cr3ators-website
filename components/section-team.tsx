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

          <div className='justify-center8 flex w-full flex-col items-center'>
            <div className='flex w-full flex-col flex-wrap items-center justify-between lg:flex-row lg:pl-4'>
              {members.map((member, index) => (
                <div
                  className='mx-5 mb-10 flex flex-col  items-center justify-center'
                  key={index}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-20 w-20'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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

//  <nav className='flex'>
//       <div className='flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1'>
//         <Link href='/'>
//           <a>
//             <Image src='/logo.jpeg' alt='logo' width={50} height={50} />
//           </a>
//         </Link>
//       </div>
//       {openMenu ? (
//         <div className='absolute top-0 right-0 z-10 flex min-h-fit  min-w-full flex-row'>
//           <div className='basis-1/2'></div>

//           <div className='basis-1/2 bg-white'>
//             <ul className=' border-l-2 text-center '>
//               <li className='border-b-2 p-2'>
//                 <button onClick={menuFunction} className='font-bold'>
//                   close
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//       <div className='m-5 flex-initial font-bold text-[#abc5c5] '>
//         <ul className='hidden  flex-initial text-left md:flex'></ul>
//       </div>
//       <button
//         onClick={menuFunction}
//         className='absolute top-0 right-0 flex-initial md:hidden'
//       >
//         <svg
//           className='h-10 w-10'
//           aria-hidden='true'
//           fill='grey'
//           viewBox='0 0 20 20'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             fill-rule='evenodd'
//             d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
//             clip-rule='evenodd'
//           ></path>
//         </svg>
//       </button>
//     </nav>
//   );
