// mockData.js
const products = [
    { id: 1, category: 'categoria1', name: 'Producto 1', description: 'Descripción del Producto 1' },
    { id: 2, category: 'categoria2', name: 'Producto 2', description: 'Descripción del Producto 2' },
    { id: 3, category: 'categoria3', name: 'Producto 3', description: 'Descripción del Producto 3' }
  ];
  
  export const fetchProducts = async () => {
    return new Promise(resolve => setTimeout(() => resolve(products), 1000));
  };
  