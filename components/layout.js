import Head from "next/head";

export default function Layout({ children }) {
  const title = `Title ${1 + 1}`;
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <center>
          <h3>talk nextjs</h3>
        </center>
        {children}
      </div>
    </>
  );
}
