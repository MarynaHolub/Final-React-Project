import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Sale from './components/Sale';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/sale" element={<Sale />} />
          {/* <Route path='/cart' element={<Cart />}/>  */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
