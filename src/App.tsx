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

function App() {
  const {dispatch} = useAppState()
  
  const fetchData = async () => {
    const res = await axios.get("http://localhost:4000/products")
    return res.data
  }

  useEffect(() => {
    fetchData().then(res => {
      const {categories} = res
      const categoriesList = categories.map(({name}:{name: string}) => ({name})) 
      const productList = categories.map(({items}: {items: any}) => (items)).flat(Infinity)

      dispatch(setProducts(productList))
      dispatch(setCategories(categoriesList))
    }).catch(err => {
      console.log(err)
      return err
    })
  }, [dispatch])

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
