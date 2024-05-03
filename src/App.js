import React from 'react';
import Navbar from './components/navbar';
import Breadcrumbs from './components/breadcrumbs';
import ProductPage from './components/pdp';
import SuccessPage from './components/SuccessPage';
import { useState } from 'react';

function App() {
  const [mintSuccess, setMintSuccess] = useState(false);

  return (
    <div>
      <Navbar />
      {!mintSuccess && <Breadcrumbs />}
      {mintSuccess ? <SuccessPage  /> : <ProductPage setMintSuccess={setMintSuccess} />}
    </div>
  );
}

export default App;
