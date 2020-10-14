import React from 'react';

import { GlobalStyles } from './globalStyle'
import AsideBar from './components/AsideBar'
import Main from './components/Main'
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <AsideBar />
        <Main />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
`
export default App; 