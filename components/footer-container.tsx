type Props = {
  children?: React.ReactNode;
};

const FooterContainer = ({ children }: Props) => {
  return <div className='container w-full'>{children}</div>;
};

export default FooterContainer;
