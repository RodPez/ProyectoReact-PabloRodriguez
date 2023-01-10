import React, { useEffect, useState } from 'react'
import productos from "../../productos/products.json"
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const {id} = useParams()
  const [detail , setDetail] = useState({})

  useEffect(() =>{
    const getProductDetail = async () =>{ 
    const obtenerProducto= new Promise((acc,rej) =>{
        setTimeout(() =>{
          acc(productos)
        }, 2000);
      });
  
      obtenerProducto
      .then (productos =>{
        const productoPorId = productos.find(producto => producto.id.toString() ===id)
        setDetail(productoPorId)
       })
        .catch((err) =>{
        alert("Hubo un error.")
      })
    }
    getProductDetail()
    
  },[id])

  
  return (
    <div>
      {
        Object.keys(detail).length === 0
        ? <h2 className='text-center fs-3'>Loading...</h2>
        :<ItemDetail detail={detail}/>
      }
    </div>
  )
}

export default ItemDetailContainer