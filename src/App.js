import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import CartSummary from './components/CartSummary'; // Importa CartSummary
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/cart" element={<CartSummary />} /> {/* Asegúrate de que la ruta /cart esté configurada para llevar al resumen del carrito */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
