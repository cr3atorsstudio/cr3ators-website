import Footer from "./footer";
import Section from "./section";
import SectionSeparator from "./section-separator";
import SectionTeam from "./section-team";
import Meta from "./meta";

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

      <div className='min-h-section flex justify-start'>
        <Section
          isFading={true}
          title={"What is Creators Studio ?"}
          contents={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat porro dicta sapiente voluptatibus aliquid ea velit, molestias officia, odio quibusdam quas quia, dolorem totam aliquam doloribus inventore qui deserunt!"
          }
          type={"introduction"}
        />
      </div>

      <SectionSeparator />

      <div className='min-h-section flex justify-end'>
        <Section
          isFading={true}
          title={"Solution for the gender gap"}
          contents={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat porro dicta sapiente voluptatibus aliquid ea velit, molestias officia, odio quibusdam quas quia, dolorem totam aliquam doloribus inventore qui deserunt!"
          }
        />
      </div>

      <SectionSeparator />

      <div className='min-h-section flex justify-start'>
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
