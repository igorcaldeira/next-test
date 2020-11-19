import { useEffect } from "react";
import Head from "next/head";
import Layout from "../../../components/layout";

const Galeria = () => {
  useEffect(() => {
    setTimeout(() => {
      throw new Error(`
        arroz

        ( ͡° ͜ʖ ͡°)
    `);
    }, 4 * 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>Galeria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <img width="600px" src="/assets/imageOne.gif" />
      </Layout>
    </div>
  );
};

export default Galeria;
