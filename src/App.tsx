import React, {Fragment} from 'react';
import GlobalStyles from "./assets/styles/globalStyles"
import Layout from "./components/Layout"
import ProductListing from "./components/Products/ProductListing"
import CartSummary from "./components/Cart/CartSummary"
import Checkout from "./components/Checkout/Checkout"
import OrderSummary from "./components/Checkout/OrderSummary"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <ProductListing />
        <CartSummary />
        <Checkout />
        <OrderSummary />
      </Layout>
    </Fragment>
  );
}

export default App;
