import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore'; 
import db from '../firebase/firebaseConfig'; 
import CartSummary from './CartSummary'; 

const Checkout = () => {
  const { state, dispatch } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async () => {
    if (email !== emailConfirm) {
      alert("Los emails no coinciden!");
      return;
    }

    const orderDetails = {
      buyer: { name, lastName, phone, email },
      items: state.items,
      total: state.total,
      date: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), orderDetails);
      setOrderId(docRef.id);
      setOrderPlaced(true);
      dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      console.error("Error al añadir el documento: ", error);
    }
  };

  return (
    <div>
      <CartSummary /> {}
      {!orderPlaced ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Apellido" value={lastName} onChange={e => setLastName(e.target.value)} />
          <input type="text" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="email" placeholder="Confirmar Email" value={emailConfirm} onChange={e => setEmailConfirm(e.target.value)} />
          <button onClick={handleCheckout} disabled={!(email && email === emailConfirm && name && lastName && phone)} className="btn btn-success" style={{ marginLeft: '10px', height: '50px'}}> Realizar Pedido </button>
        </form>
      ) : (
        <p>¡Gracias por tu compra! Tu ID de pedido es {orderId}</p>
      )}
    </div>
  );
};

export default Checkout;
