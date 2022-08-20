type Props = {
  children?: React.ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return <div className='container md:px-5 w-full px-1'>{children}</div>;
};

export default SectionContainer;
