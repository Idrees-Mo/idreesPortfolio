import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './gobalStyles';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

function App() {
  const theme = {}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
