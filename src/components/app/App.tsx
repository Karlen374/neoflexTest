import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from 'src/components/appHeader/appHeader';
import Basket from 'src/components/basket/basket';
import Products from 'src/components/products/products';
import AppFooter from '../appFooter/appFooter';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
