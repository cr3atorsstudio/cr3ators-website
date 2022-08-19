import Footer from "./footer";
import Section from "./section";
import SectionSeparator from "./section-separator";
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

      <div className='min-h-1/2 w-full'>
        <Section
          isFading={true}
          title={"Creators Studioとは"}
          contents={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat porro dicta sapiente voluptatibus aliquid ea velit, molestias officia, odio quibusdam quas quia, dolorem totam aliquam doloribus inventore qui deserunt!"
          }
        />
      </div>

      <SectionSeparator />
      <Section
        isFading={true}
        title={"Solution for the gender gap"}
        contents={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat porro dicta sapiente voluptatibus aliquid ea velit, molestias officia, odio quibusdam quas quia, dolorem totam aliquam doloribus inventore qui deserunt!"
        }
      />
      <Footer />
    </>
  );
};

export default Layout;
