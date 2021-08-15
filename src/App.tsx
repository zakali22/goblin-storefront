import React, {Fragment} from 'react';
import GlobalStyles from "./assets/styles/globalStyles"
import Layout from "./components/Layout"
import ProductListing from "./components/Products/ProductListing"
import CartSummary from "./components/Cart/CartSummary"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <ProductListing />
        <CartSummary />
      </Layout>
    </Fragment>
  );
}

export default App;
