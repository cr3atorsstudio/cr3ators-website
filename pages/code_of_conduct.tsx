import { NextPage } from "next";
import { CodeOfConduct } from "../components/code-of-conduct";
import Navabr from "../components/navbar";
import SectionContainer from "../components/section-container";
import SectionFadeIn from "../components/section-fade-in";


const CodeOfConductPage: NextPage = () => {

  return (
    <div>
        <Navabr />
        <SectionContainer>
          <CodeOfConduct />
        </SectionContainer>
    </div>
  );
};


export default CodeOfConductPage;