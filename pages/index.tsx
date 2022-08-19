import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Creators Studio</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
}
