import React, {Fragment} from 'react';
import GlobalStyles from "./assets/styles/globalStyles"
import {Container, Logo, Wrapper} from "./assets/styles/index"
import Header from "./assets/styles/components/Header"
import{ ReactComponent as CartIcon} from "/images/cart.svg"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header>
        <Container>
          <Wrapper>
            <Logo>Global Store</Logo>
            <h4>Everything for your Typescript adventure</h4>
          </Wrapper>
          <Wrapper>
            <CartIcon />
          </Wrapper>
        </Container>
      </Header>
    </Fragment>
  );
}

export default App;
