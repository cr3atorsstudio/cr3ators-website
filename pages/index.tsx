import Intro from "../components/Intro";
import HomeBody from "../components/HomeBody";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Creators Studio</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:ital,wght@0,300;0,400;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Intro />
      <HomeBody />
    </Layout>
  );
}
