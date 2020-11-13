import React from 'react';
import AppRouter from './routes/AppRouter';

import { ThemeProvider } from '@mindlab-vojo/component-library'
import { GlobalStyle } from './styles'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <AppRouter/>          
    </ThemeProvider>
  );
}

export default App;
