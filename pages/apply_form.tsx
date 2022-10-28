import { NextPage } from "next";
import Navabr from "../components/navbar";

const ApplyForm: NextPage = () => {
  const redirect = () => {
    // @ts-ignore
    document.getElementById("my-google-form").onload = function () {
      window.document.location = "https://discord.gg/23sCnA3Edt";
    };
  };
  return (
    <div>
      <Navabr />
      <div className='md:m-20'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfxfARwmnEqTP_LXfeNBXHgz_X9taZqn4kRRlRnVFVnDMgqdg/viewform?embedded=true'
          className='h-screen w-full'
          id='my-google-form'
          onLoad={redirect}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ApplyForm;
