import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Item from './Item/Item';
import Store from './Store/Store';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Item/>}/>
        <Route path='/store' element={<Store/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>





    </>
  );
}

export default App;
