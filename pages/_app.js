import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <html data-theme="kodepos">
      <Component {...pageProps} />
    </html>
  );
}

export default MyApp;
