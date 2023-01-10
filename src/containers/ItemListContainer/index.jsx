import React, { useEffect, useState } from 'react'
import productos from "../../productos/products.json"
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products , setProducts] = useState([])
  const {categoriaId} = useParams()

  useEffect(() =>{
    const getProducts = () => { 
      const obtenerProductos = new Promise((acc,rej) =>{
        setTimeout(() =>{
          acc(productos)
        }, 2000);
      });

      obtenerProductos
        .then (productos =>{
          if (categoriaId) {
            const productosFiltradosPorCategoria = productos.filter(producto => producto.categoria === categoriaId)
            setProducts(productosFiltradosPorCategoria) 
          }else {
            setProducts(productos)
          }
        })
        .catch((err) =>{
          alert("Hubo un error.")
        })
    }
    getProducts()
  },[categoriaId])

  
  return (
    <div className='row'>
        <h1 className='d-flex justify-content-center'> {greeting} </h1>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer