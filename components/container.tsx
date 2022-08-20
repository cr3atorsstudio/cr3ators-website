type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='container md:px-5 px-1'>{children}</div>;
};

export default Container;
