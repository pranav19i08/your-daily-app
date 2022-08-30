import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";


function MyApp({ Component, pageProps }) {
  return (
    <>
     <React.Fragment>
    <CssBaseline/>
      <Component {...pageProps} />
      </React.Fragment>
    </>
  );
}

export default MyApp;

