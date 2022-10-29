import { NextPage } from "next";
import Layout from "../components/Layout";

const ApplyForm: NextPage = () => {
  const redirect = () => {
    // @ts-ignore
    document.getElementById("my-google-form").onload = function () {
      window.document.location = "https://discord.gg/23sCnA3Edt";
    };
  };
  return (
    <Layout>
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
    </Layout>
  );
};

export default ApplyForm;
