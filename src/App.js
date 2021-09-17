import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Layout, Profile, LyricsContainer } from './components';
import GeniusProvider from './providers/genius-provider';

import theme from './theme';

const App = () => (
  <GeniusProvider>
    <ThemeProvider theme={theme}>
      <Reset />
      <Layout>
        <Profile />
        <LyricsContainer />
      </Layout>
    </ThemeProvider>
  </GeniusProvider>
);

export default App;
