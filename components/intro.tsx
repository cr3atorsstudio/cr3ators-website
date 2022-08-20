import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <div>
      <section className='flex-col md:flex-row flex items-center md:justify-between mt-32'>
        <div className='w-full flex-col items-center justify-center md:ml-32'>
          <h1 className='text-5xl md:text-8xl text-white leading-tight md:pr-8 font-openSans font-black tracking-wide'>
            Empowering <br /> woman in Web3
          </h1>
          <p className='font-openSans font-normal text-4xl text-yellow-300 ml-5 mt-5'>
            A community closing the gender gap in Web3.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Intro;
