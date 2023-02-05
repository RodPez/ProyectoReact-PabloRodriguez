import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../components/ItemCount'
import { Shop } from '../../context/ShopProvider'
import "./styles.css"

const ItemDetail = ({detail} ) => {
    const [cantProd , setCantProd] = useState(0)

    const {addProduct} = useContext(Shop)

    const stock = detail.stock
    const onAdd = (cantidad) => {
      if (cantidad < stock){
        console.log(`Se agregaron ${cantidad} de productos.`)
        setCantProd(cantidad)
        addProduct({...detail, cantProd: cantidad})
      }
    }
  return (
    <div>
      <img src={detail.imagen} className="rounded mx-auto d-block m-4 imgDetail" alt={`id-${detail.id}`} />
      <h1 className='fs-2 text-center'>{detail.nombre}</h1>
      <p className='fs-4 text-center'>{detail.descripcion} </p>
      <p className='fs-5 text-center'>${detail.precio} </p>
      {
        cantProd === 0 
        ?<ItemCount stockProd={stock} initial={1} onAdd ={onAdd}  />
        :<div className="d-grid gap-2 col-6 mx-auto"> 
            <button className='btn btn-light ms-4 fs-5'>
              <Link className='text-decoration-none fw-bold text-dark' to="/cart">Finalizar Compra.</Link>
            </button>
          </div>
      }
    </div>
  )
}

export default ItemDetail