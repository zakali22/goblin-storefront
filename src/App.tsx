import React, {Fragment} from 'react';
import GlobalStyles from "./assets/styles/globalStyles"
import {Container} from "./assets/styles/index"
import Layout from "./components/Layout"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Container className="nes-container with-title">
          <p className="title">Weapons</p>
        </Container>
      </Layout>
    </Fragment>
  );
}

export default App;
