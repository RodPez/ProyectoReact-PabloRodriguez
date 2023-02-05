import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.css'
import generarObjetoOrden from '../../services/generarObjetoOrden'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";
import FormComp from '../../components/Form'
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2'

const Cart = () => {


  const {products, total, cleanCart} = useContext(Shop)

  const [loader, setLoader] = useState(false)

  const [formVis, setFormVis] = useState(false)

  const confirmarCompra = async (formData) => {
    const {nombre, email ,telefono} = formData
    try {
      setLoader(true)
  
      const orden = generarObjetoOrden({
        nombre,
        email,
        telefono,
        cart: products,
        total: total()
      })
      
      console.log(orden)
  
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      cleanCart();
      for (const prodCart of products) {
        const productosRef = doc(db, "productos", prodCart.id);
        await updateDoc(productosRef, {
          stock: prodCart.stock - prodCart.cantProd});
      }
      Swal.fire({
        icon: 'success',
        title: 'Orden confirmada con ID:',
        text: docRef.id
      })
      
      
    } catch (error) {
      console.log(error)
    }finally{
      setLoader(false)
      setFormVis(false)
    }

  }
   

  return (
    <>
    {products.length >0 ?
    <>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
            {products.map(product =>{
              return <TableRow key={product.id} product={product}/>
            })}
            <tr>
              <td className='fs-5 fw-bolder' scope='col'>Total</td>
              <td className='fs-5 fw-bolder' scope='col'>{total()} </td>
            </tr>
        </tbody>
      </table>
      {
        loader ?
        <Spinner className='d-flex justify-content-center' animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        :
        <button className='btn btn-success finComp' onClick={() =>setFormVis(true)}>Finalizar Compra</button>
      }
      {formVis ?
      <FormComp
      confirmarCompra = {confirmarCompra}
      formVis = {formVis}
      setFormVis = {setFormVis}
      />
      :null}
      </>
    :
    <> 
      <button className='btn btn-secondary addPrdToCart mt-5'>
        <Link className='text-decoration-none fw-bold text-light ' to={"/"}>Agregue productos al carrito</Link>
      </button>
    </>
    }
    </>
  )
}

export default Cart