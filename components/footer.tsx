import FooterContainer from "./footer-container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <div className='py-28 flex flex-col lg:flex-row items-center justify-center'>
        <div className='text-5xl lg:text-[2rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4'>
          Join the <br /> community today!
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 '>
          <a
            href='https://nextjs.org/docs/basic-features/pages'
            className='mx-3 bg-pink-600 hover:bg-white hover:text-black border text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-md'
          >
            Supporter Form
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
