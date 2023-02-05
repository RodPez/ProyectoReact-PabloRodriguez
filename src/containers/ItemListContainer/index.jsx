import React from 'react'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';

const ItemListContainer = ({greeting}) => {
  const {categoriaId} = useParams()
  const [products, loading, error] = useFirebase(categoriaId)

 
  return (
    <div className='row'>
        <h1 className='d-flex justify-content-center'> {greeting} </h1>
        {error && <h1>Hubo un error: {error} </h1>}
        {
          loading ?
          <h2>Cargando...</h2>
          :
          <ItemList productos={products}/>
        }
        
    </div>
  )
}

export default ItemListContainer