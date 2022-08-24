const Intro = () => {
  return (
    <div>
      <section className='mt-32 flex flex-col items-center md:flex-row md:justify-between'>
        <div className='ml-10 w-full flex-col items-center justify-center xl:ml-32'>
          <h1 className='ml-3 font-openSans text-5xl font-black leading-tight tracking-wide text-white md:pr-8 md:text-8xl'>
            Empowering <br /> womxn in Web3
          </h1>
          <p className='ml-5 mt-5 font-openSans text-2xl font-normal text-yellow-300 md:text-4xl'>
            A community closing the gender gap in Web3.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Intro;
