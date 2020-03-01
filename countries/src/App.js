import React from 'react';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import CountriesList from './Components/CountriesList';

import { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', Sans-serif;
    background-color: hsl(0, 0%, 98%);
  }
`

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <CountriesList></CountriesList>
   <Footer></Footer>
   </>
  );
}

export default App;
