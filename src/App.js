import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Layout, Profile, SongsContainer } from './components';
import GeniusProvider from './providers/genius-provider';

import theme from './theme';

const App = () => (
  <GeniusProvider>
    <ThemeProvider theme={theme}>
      <Reset />
      <Layout>
        <Profile
          artistImageUrl="https://images.genius.com/25d8a9c93ab97e9e6d5d1d9d36e64a53.1000x1000x1.jpg"
          artistName="Kendrick Lamar"
          instagramName="@kendricklamar"
        />
        <SongsContainer />
      </Layout>
    </ThemeProvider>
  </GeniusProvider>
);

export default App;
