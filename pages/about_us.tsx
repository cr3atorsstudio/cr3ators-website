import { NextPage } from "next";
import AboutUs from "../components/about-us";
import Navabr from "../components/navbar";
import SectionContainer from "../components/sections/section-container";

const AboutUsPage: NextPage = () => {
  return (
    <div>
      <div className='flex min-h-section justify-center'>
        <SectionContainer>
          <AboutUs />
        </SectionContainer>
      </div>
    </div>
  );
};

export default AboutUsPage;
