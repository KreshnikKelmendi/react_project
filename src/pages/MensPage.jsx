import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Cart from "../components/Cart";
import { CartProvider } from "react-use-cart";

const MensPage = () =>{
    return(
    <>
    <CartProvider>
      <Header />
      <Search />
      <Cart />
      </CartProvider>
    </>
    )
}

export default MensPage;