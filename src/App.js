import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <div>Hello</div>
    </ThemeProvider>
  );
}

export default App;
