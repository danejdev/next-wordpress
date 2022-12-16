import { GetStaticProps } from "next";
import Head from "next/head";
import { getSiteTitle } from "../lib/api";

export default function Home({ siteTitle }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <h1>{siteTitle}</h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const siteTitle = await getSiteTitle();
  return {
    props: { siteTitle },
    revalidate: 10,
  };
};
