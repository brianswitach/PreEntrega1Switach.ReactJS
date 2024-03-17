import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* Asegúrate de tener las rutas dinámicas para categoryId y id como se describe en las consignas */}
        {/* Puedes agregar más rutas según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
