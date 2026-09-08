import './App.css';

import Main from './pages/Main';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Sale from './components/Sale';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
