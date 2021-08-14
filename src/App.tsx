import React, {Fragment} from 'react';
import GlobalStyles from "./assets/styles/globalStyles"
import {Container, Logo} from "./assets/styles/index"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Logo>Global Store</Logo>
        <h4>Everything for your Typescript adventure</h4>
      </Container>
    </Fragment>
  );
}

export default App;
