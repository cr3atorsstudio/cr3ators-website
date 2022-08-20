import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Creators Studio</title>
        </Head>
        <Intro />
      </Layout>
    </>
  );
}
