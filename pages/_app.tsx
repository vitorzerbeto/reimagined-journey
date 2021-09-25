import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';

import theme from '@/theme';
import Header from '@/components/Layout/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
