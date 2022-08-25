import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Navbar from "../components/navbar";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Creators Studio</title>
      </Head>
      <Navbar />
      <Intro />
    </Layout>
  );
}
