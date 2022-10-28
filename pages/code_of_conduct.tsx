import { NextPage } from "next";
import { CodeOfConduct } from "../components/code-of-conduct";
import Navabr from "../components/navbar";
import SectionContainer from "../components/sections/section-container";

const CodeOfConductPage: NextPage = () => {
  return (
    <div>
      <div className='flex min-h-section justify-center'>
        <SectionContainer>
          <CodeOfConduct />
        </SectionContainer>
      </div>
    </div>
  );
};

export default CodeOfConductPage;
