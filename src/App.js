import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Layout, Profile } from './components';

import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Layout>
      <Profile />
      <div>Songs</div>
    </Layout>
  </ThemeProvider>
);

export default App;
