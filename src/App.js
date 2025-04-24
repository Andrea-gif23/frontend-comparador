import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import LoginForm from './components/LoginForm';
import Categorias from './components/Categorias'; // 👈 1. Importa el nuevo componente
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [basket, setBasket] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas"); // 👈 2. Añade este estado

  // Obtener productos del backend
  useEffect(() => {
    axios.get('https://comparador-precios-backend.onrender.com/api/products')
      .then(res => {
        console.log("Datos recibidos:", res.data);
        setProducts(res.data);
      })
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  // Filtrar productos por búsqueda Y categoría
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoriaSeleccionada === "todas" || product.categoria === categoriaSeleccionada) // 👈 3. Filtro combinado
  );

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Comparador de Precios</h1>
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>

      <SearchBar onSearch={setSearchTerm} />
      
      {/* 👈 4. Añade el componente Categorias aquí */}
      <Categorias onSelectCategoria={setCategoriaSeleccionada} />

      <div className="main-content">
        <ProductList 
          products={filteredProducts} 
          onAddToBasket={(product) => setBasket([...basket, product])} 
        />
        <Basket items={basket} />
      </div>
    </div>
  );
}

export default App;