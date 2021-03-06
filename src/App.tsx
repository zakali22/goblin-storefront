import React, {Fragment, useEffect} from 'react';
import axios from "axios"
import GlobalStyles from "./assets/styles/globalStyles"
import Layout from "./components/Layout"
import ProductListing from "./components/Products/ProductListing"
import CartSummary from "./components/Cart/CartSummary"
import Checkout from "./components/Checkout/Checkout"
import OrderSummary from "./components/Checkout/OrderSummary"
import { useAppState } from './utils/useAppState';
import {setProducts, setCategories} from "./state/appStateActions"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  const {state: {productList}, dispatch} = useAppState()
  
  const fetchData = async () => {
    const res = await axios.get("http://localhost:4000/products")
    return res.data
  }

  useEffect(() => {
    fetchData().then(res => {
      const {categories} = res
      const categoriesList = categories.map(({name}:{name: string}) => ({name})) 
      const productList = categories.map(({name, items}: {name: string, items: []}) => {
         return items.map(item => ({
            category: name,
            ...item as {} // Spread operator in TS
          }))
      }).flat(Infinity)

      dispatch(setProducts(productList))
      dispatch(setCategories(categoriesList))
    }).catch(err => {
      console.log(err)
      return err
    })
  }, [dispatch])

  return (
    <Router>
      <GlobalStyles />
      <Layout>
      <Switch>
          <Route exact path="/" render={(renderProps) => {
            return <ProductListing products={productList} {...renderProps} />
          }} />
          <Route exact path="/order/:orderId" component={OrderSummary} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={CartSummary} />
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
