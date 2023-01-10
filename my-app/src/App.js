// import Header from "./components/Header/Header";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Register from './components/Register/Register';
import Edit from './components/edit';
import Create from './components/create';
import Register from './components/register';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/register' element={<Register/>} /> */}
        <Route path='/register/edit/:id' element={<Edit />} />
        <Route path="/register/create" element={<Create />} />
       <Route path='/cart' element={<Cart/>} />
      </Routes>
      {/* <Home /> */}

    </>
  );
}

export default App;
