import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Layout, Profile, LyricsContainer } from './components';
import GeniusProvider from './providers/genius-provider';

import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GeniusProvider>
      <Reset />
      <Layout>
        <Profile />
        <LyricsContainer />
      </Layout>
    </GeniusProvider>
  </ThemeProvider>
);

export default App;
