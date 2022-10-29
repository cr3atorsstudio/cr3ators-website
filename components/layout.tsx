import Navabr from "./Navbar";

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
