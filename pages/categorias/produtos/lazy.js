import Image from "next/image";
import Head from "next/head";

const Lazy = () => {
  return (
    <div>
      <Head>
        <title>Lista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "200px", height: "2000px" }}>placeholder</div>
      <img width="440px" height="300px" src="/assets/imageTwo.gif" />
      <Image
        width="440px"
        height="300px"
        layout="fixed"
        src="/assets/imageTwo.gif"
      />
      <div style={{ width: "200px", height: "2000px" }}>placeholder</div>
      <img width="720px" height="1440px" src="/assets/test.jpg" />
      <Image
        loading="eager"
        quality={1}
        width="720px"
        height="1440px"
        layout="fixed"
        src="/assets/test.jpg"
      />
    </div>
  );
};

export default Lazy;
