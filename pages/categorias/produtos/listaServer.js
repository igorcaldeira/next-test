import { useState } from "react";
import Head from "next/head";

// Time to first byte (TTFB) será menor pois o servidor computa o resultado em todo request
// dessa forma o resultado não pode ser cacheado via cdn sem configurações extras
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: {
      stars: json.stargazers_count,
      origin: "server function",
    },
    // pode-se usar revalidate, redirect e etc
  };
}

const Lista = (params) => {
  const [name, setName] = useState("");
  return (
    <div>
      <Head>
        <title>Lista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lista</h1>
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
