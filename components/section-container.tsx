type Props = {
  children?: React.ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return (
    <div className='container w-full px-1 lg:px-5'>
      <div className='flex w-full flex-col items-center justify-center px-1 pt-10 pb-10 font-sans'>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
