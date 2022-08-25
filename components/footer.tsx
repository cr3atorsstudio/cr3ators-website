import Image from "next/image";

const Footer = () => {
  return (
    <footer className='border-t border-neutral-200 bg-neutral-50'>
      <div className='flex flex-col items-center justify-center py-20 lg:flex-row'>
        <div className='mb-10 text-center text-5xl font-bold leading-tight tracking-tighter md:mt-0 md:mb-0 md:pr-4 lg:text-left lg:text-[2rem]'>
          Join the <br /> community today!
        </div>
        <div className='mt-8 flex flex-col items-center justify-center md:mr-52 md:mt-0 md:ml-4 md:flex-row'>
          <a
            href='https://nextjs.org/docs/basic-features/pages'
            className='mx-3 mb-6 rounded-md border bg-pink-600 py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black md:mb-0 md:px-8'
          >
            Supporter Form
          </a>
        </div>
        <div className='flex w-1/2 justify-center'>
          <div>
            <a href='https://twitter.com/cr3atorsstudio' target='_blank'>
              <Image
                src='/twitter.png'
                width={50}
                height={50}
                className='cursor-pointer'
              />
            </a>
          </div>
          <div className='mx-5'>
            <a href='https://twitter.com/cr3atorsstudio' target='_blank'>
              <Image
                src='/twitter.png'
                width={50}
                height={50}
                className='cursor-pointer'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
