import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import theme from '@/theme';
import Header from '@/components/Layout/Header/Header';
import createEmotionCache from '@/createEmotionCache';

const cache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
