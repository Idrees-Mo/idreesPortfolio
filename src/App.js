import React from 'react';
import { GlobalStyles } from './globalStyle'
import AsideBar from './components/AsideBar'
import Main from './components/Main'


const App = () => {
  return (
    <>
      <GlobalStyles />
      <div class="main-container">
        <AsideBar />
        <Main />
      </div>
    </>
  );
}

export default App; 