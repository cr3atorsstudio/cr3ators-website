import Navabr from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navabr />
      {children}
    </>
  );
};

export default Layout;
