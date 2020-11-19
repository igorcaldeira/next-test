export default function App({ Component, pageProps }) {
  return (
    <>
      <center>
        <h1>Global</h1>
      </center>
      <Component {...pageProps} />
    </>
  );
}
