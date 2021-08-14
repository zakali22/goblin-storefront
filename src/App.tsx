import React, {Fragment} from 'react';
import GlobalStyles from "./assets/styles/globalStyles"
import Layout from "./components/Layout"
import ProductListing from "./components/Products/ProductListing"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <ProductListing />
      </Layout>
    </Fragment>
  );
}

export default App;
