import Image from "next/image";

const Footer = () => {
  return (
    <footer className='border-t border-neutral-200 bg-neutral-50'>
      <div className='flex flex-col items-center py-10 lg:flex-row'>
        <div className='flex-col items-center justify-center'>
          <div className='text-center text-2xl font-bold leading-tight tracking-tighter md:mt-0 md:mb-0 lg:ml-20 lg:pr-4 lg:text-left lg:text-3xl'>
            Want to join as a support member?
          </div>
          <div className='md: mt-8 mb-10 flex flex-col items-center justify-center lg:mt-10 lg:flex-row'>
            <a
              href='https://forms.gle/6PhCHWSbhVNZ18mGA'
              className='h-18 mx-3 mb-6 w-48 rounded-md border bg-pink-600 py-3 px-12 text-center font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black md:mb-0 md:h-12 md:px-8'
            >
              Supporter Form
            </a>
          </div>
        </div>

        <div className='flex w-full justify-center lg:justify-end'>
          <div className='mr-5'>
            <a href='https://twitter.com/cr3atorsstudio' target='_blank'>
              <Image
                src='/twitter.png'
                width={50}
                height={50}
                className='cursor-pointer'
              />
            </a>
          </div>
          <div className='lg:mr-20'>
            <a href='https://www.instagram.com/cr3atorsstudio' target='_blank'>
              <Image
                src='/instagram.png'
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
