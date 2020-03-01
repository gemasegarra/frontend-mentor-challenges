import React from 'react';

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
  );
}

export default App;
