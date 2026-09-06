import './App.css'
import Header from './components/Header'
import Main from './pages/Main'
import Categories from './components/Categories'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="app">
  
      <Header/>
            <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/categories" element={<Categories />} />
              {/* <Route path="/products" element={<Products />} />
              <Route path="/sale" element={<Sale />} />
              <Route path='/cart' element={<Cart />}/> */}
            </Routes>
          </div>
      {/* <Main/> */}
  
    </div>
  )
}

export default App

