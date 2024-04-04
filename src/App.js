import React from 'react';
import Navbar from './components/navbar';
import Breadcrumbs from './components/breadcrumbs';
import ProductPage from './components/pdp';

function App() {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <ProductPage />
    </div>
  );
}

export default App;
