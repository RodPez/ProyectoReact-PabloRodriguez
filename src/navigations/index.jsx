import React from 'react'
import NavBar from '../components/NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from '../containers/ItemDetailContainer';
import Cart from '../containers/CartContainer';

const MainNavigator = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={"Bienvenidos a La Glotoneria"}/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<h2>Ruta no encontrada. </h2> } />
        </Routes> 
      </BrowserRouter>
  )
}

export default MainNavigator