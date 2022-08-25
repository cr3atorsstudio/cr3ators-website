import { useCallback, useEffect, useState } from "react";
import { useLocale } from "../hooks/useLocale";
import { useWindowSize } from "../hooks/useWindowSite";
import Link from "next/link";

const Navabr = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [useWindowSize()]);

  const menuFunction = useCallback(() => {
    setOpenMenu(!isMenuOpen);
  }, [isMenuOpen]);

  const locale = useLocale().locale;

  return (
    <div>
      <nav className='px-2 py-2.5 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <a href='https://www.cr3ators.studio/' className='flex items-center'>
            <img
              src={"/logo.jpeg"}
              className='mr-3 h-6 rounded-lg sm:h-9'
              alt='CS Logo'
            />
            <span className='cursor-pointer self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              Creators Studio
            </span>
          </a>

          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='z-50 ml-3 inline-flex items-center rounded-lg bg-transparent p-2 text-sm text-gray-500 outline-none hover:bg-gray-200 focus:ring-2  dark:text-pink-400  md:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={menuFunction}
          >
            <svg
              className='h-6 w-6'
              aria-hidden='true'
              fill='grey'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            className='hidden w-full md:block md:w-auto '
            id='navbar-default'
          >
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:space-x-10 md:border-0 md:font-medium lg:space-x-20 lg:text-2xl '>
              <li>
                <a
                  href='https://mirror.xyz/rlho.eth/rsmOBM9CheJ-yhuNqB1y9KdzDiyHDWIN4D22mydSVAM'
                  className='block py-2 pr-4 pl-3 text-white hover:text-gray-300 dark:text-white md:bg-transparent md:p-0'
                  aria-current='page'
                  target='_blank'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='https://forms.gle/6PhCHWSbhVNZ18mGA'
                  className='block py-2 pr-4 pl-3 text-white hover:text-gray-300 dark:text-white md:bg-transparent md:p-0'
                  aria-current='page'
                  target='_blank'
                >
                  Apply Form
                </a>
              </li>
              <div className=' cursor-pointer'>
                <Link href='/' locale={locale === "ja" ? "en" : "ja"} passHref>
                  <p
                    className={`rounded-full ${
                      locale === "ja" ? "bg-blue-500" : "bg-red-400"
                    }  py-2 px-4 font-bold text-white`}
                  >
                    {locale === "ja" ? "EN" : "JA"}
                  </p>
                </Link>
              </div>
            </ul>
          </div>
          {isMenuOpen ? (
            <div
              id='menu'
              className={`absolute top-0 right-0 z-10 flex min-h-fit min-w-full flex-row justify-end md:hidden`}
            >
              <div className='w-full rounded-md bg-white'>
                <div className='flex flex-row items-center justify-evenly align-middle font-bold'>
                  <div className='flex h-20 cursor-pointer items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='gray'
                      className='mr-1 h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                      />
                    </svg>

                    <p className=' hover:text-gray-300'>
                      <a
                        href='https://mirror.xyz/rlho.eth/rsmOBM9CheJ-yhuNqB1y9KdzDiyHDWIN4D22mydSVAM'
                        aria-current='page'
                        target='_blank'
                      >
                        About
                      </a>
                    </p>
                  </div>
                  <div className='flex h-20 cursor-pointer items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='gray'
                      className='mr-1 h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                      />
                    </svg>
                    <p className=' hover:text-gray-300'>Apply From</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navabr;
