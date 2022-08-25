import Footer from "./footer";
import SectionCommunity from "./section-community";
import SectionVision from "./section-vision";
import SectionTeam from "./section-team";
import SectionSeparator from "./section-separator";

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
        <SectionCommunity isFading={true} title={"What is Creators Studio ?"} />
      </div>

      <SectionSeparator />

      <div className='flex min-h-section justify-end'>
        <SectionVision
          isFading={true}
          title={"Our Vision"}
          contents={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat porro dicta sapiente voluptatibus aliquid ea velit, molestias officia, odio quibusdam quas quia, dolorem totam aliquam doloribus inventore qui deserunt!"
          }
        />
      </div>
      <SectionSeparator />
      <div className='flex min-h-section justify-start'>
        <SectionTeam
          isFading={true}
          title={"Core Team Members"}
          contents={"This is our team"}
        />
      </div>
      <SectionSeparator />
      <Footer />
    </>
  );
};

export default Layout;
