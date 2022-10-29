import { NextPage } from "next";
import AboutUs from "../components/AboutUs";
import SectionContainer from "../components/sections/section-container";
import Layout from "../components/layout";

const AboutUsPage: NextPage = () => {
  return (
    <Layout>
      <div className='flex min-h-section justify-center'>
        <SectionContainer>
          <AboutUs />
        </SectionContainer>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
