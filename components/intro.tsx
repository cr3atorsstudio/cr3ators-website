import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-32'>
      <div className='w-1/2'>
        <h1 className='text-5xl md:text-8xl text-gray-900 leading-tight md:pr-8 font-title'>
          Empowering <br />
          <span className='text-pink-600'>W</span>omen <br /> in Web3
        </h1>
      </div>
    </section>
  );
};

export default Intro;
