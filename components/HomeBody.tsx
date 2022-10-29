import Footer from "./footer";
import SectionCommunity from "./sections/section-community";
import SectionVision from "./sections/section-vision";
import SectionTeam from "./sections/section-team";
import SectionSeparator from "./sections/section-separator";
import SectionGeneral from "./sections/section-hiring";
import Meta from "./utils/meta";

const HomeBody = () => {
  return (
    <>
      <Meta />
      <div className='min-h-screen' />

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

export default HomeBody;
