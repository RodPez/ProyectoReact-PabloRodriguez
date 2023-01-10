import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Item = ({product} ) => {
  return (
    <div className='card p-2 m-3 tarjeta'  >
        <img src={product.imagen} className="card-img-top imgCards" alt={`id-${product.id}`} />
        <div className='card-body'>
            <h5 className='card-title'>{product.nombre} </h5>
                <p className='card-text'>$ {product.precio} </p>
                <Link to={`/detail/${product.id}`} className='btn btn-primary'>Ver Detalles</Link>
        </div>
    </div>
  )
}

export default Item



