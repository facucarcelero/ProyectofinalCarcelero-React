import { useState } from 'react'
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [Total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  
  return(
    <>
      <Header allProducts={allProducts} 
      setAllProducts={setAllProducts}
      total={Total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      />
      <ProductList allProducts={allProducts} 
      setAllProducts={setAllProducts}
      total={Total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      />
    </>
  );
  
}

export default App
