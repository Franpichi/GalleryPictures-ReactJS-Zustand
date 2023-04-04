import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Item from './Components/Item/Item';
import usePhotoStore from './Components/Context/photoStore';
import Gallery from './Components/Gallery/Gallery';
const App = () => {
  const initStore = usePhotoStore((state) => state.init);

  useEffect(() => {
    initStore();
  }, [initStore]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
