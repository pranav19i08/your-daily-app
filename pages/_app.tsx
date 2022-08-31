import CssBaseline from "@mui/material/CssBaseline";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
