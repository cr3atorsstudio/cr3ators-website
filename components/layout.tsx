import Footer from "./footer";
import SectionCommunity from "./section-community";
import SectionVision from "./section-vision";
import SectionTeam from "./section-team";
import SectionSeparator from "./section-separator";
import SectionGeneral from "./section-hiring";

import Meta from "./utils/meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>

      <div className='flex min-h-section justify-start'>
        <SectionCommunity isFading={true} />
      </div>

      <SectionSeparator />

      <div className='flex min-h-section justify-end'>
        <SectionVision isFading={true} />
      </div>

      <SectionSeparator />

      <div className='flex min-h-section justify-start'>
        <SectionTeam isFading={true} />
      </div>

      <SectionSeparator />
      <div className='flex min-h-section justify-center'>
        <SectionGeneral isFading={true} />
      </div>

      <SectionSeparator />

      <Footer />
    </>
  );
};

export default Layout;
