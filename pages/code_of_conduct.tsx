import { NextPage } from "next";
import CodeOfConduct from "../components/CodeOfConduct";
import Layout from "../components/Layout";
import SectionContainer from "../components/sections/section-container";

const CodeOfConductPage: NextPage = () => {
  return (
    <Layout>
      <div className='flex min-h-section justify-center'>
        <SectionContainer>
          <CodeOfConduct />
        </SectionContainer>
      </div>
    </Layout>
  );
};

export default CodeOfConductPage;
