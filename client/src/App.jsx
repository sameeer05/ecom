import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  const user = false
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/products/:category'  element={<ProductList/>} />
        <Route path='/product/:id'  element={<Product/>} />
        <Route path='/cart'  element={<Cart/>} />
        <Route path='/login'  element={user ? <Home /> : <Login/>} />
        <Route path='/register'  element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;