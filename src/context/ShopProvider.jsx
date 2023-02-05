import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({children}) => {

  const [products, setProducts] = useState ([])

  const addProduct = (product) => {
    const isInCart = isProductOnCart(product.id)
    if (isInCart) {
      const prodRepe = products.find(element => element.id === product.id)
      prodRepe.cantProd += product.cantProd
      setProducts([...products])
    } else {
      setProducts([...products, product])
    }
  }

  const removeItem = (id) =>{
    const cartConProdEliminado = products.filter(product => product.id !==id)
    setProducts(cartConProdEliminado)
  }

  const cantCart = () =>{
    let cantTotal = 0;
    for (const product of products) {
      cantTotal += product.cantProd 
    }
    return cantTotal
  }

  const isProductOnCart = (id) =>{
    return products.some(product => product.id === id)
  }

  const total = () => {
    let tot = 0;
    for (const product of products) {
      tot += product.precio * product.cantProd
    }
    return tot;
  }

  const cleanCart = () =>{
    setProducts([])
  } 
 
  return (
    <Shop.Provider value = {{products,addProduct,cantCart,removeItem,total,cleanCart}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider
