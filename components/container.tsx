type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='container mx-auto px-5 w-1/2'>{children}</div>;
};

export default Container;
