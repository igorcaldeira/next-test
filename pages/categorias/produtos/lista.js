import { useState, useEffect } from "react";
import Head from "next/head";

const getServerData = async (cb) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  cb(json.stargazers_count);
};

// buscar em tempo de build
export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: {
      stars: json.stargazers_count,
      origin: "build time function",
    },
    // pode-se usar revalidate, redirect e etc
  };
}

const Lista = (params) => {
  const [name, setName] = useState("");
  // const [data, setData] = useState(-1);

  // useEffect(() => {
  //   getServerData(setData);
  // }, []);

  return (
    <div>
      <Head>
        <title>Lista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lista</h1>
      {/* <h3>Next stars {data}</h3> */}
      <h3>
        Next stars {params.stars} from {params.origin}
      </h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
      </ul>
    </div>
  );
};

export default Lista;
