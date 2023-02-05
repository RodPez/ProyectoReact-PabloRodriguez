import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import  "./style.css"

const TableRow = ({product}) => {
  const {removeItem} = useContext(Shop)
  
  return (
    <tr>
          <th scope="row">{product.id}</th>
          <td><img className='imgTabla' src={product.imagen} alt="Table-Row" /></td>
          <td>{product.nombre}</td>
          <td>{product.precio}</td>
          <td>{product.cantProd}</td>
          <td><button onClick={() => removeItem(product.id)}>Eliminar</button></td>
    </tr>
  )
}

export default TableRow

