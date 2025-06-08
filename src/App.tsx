import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./modules/Home";
import Category from "./modules/Category";
import Order from "./modules/Order";
import AboutUs from "./modules/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/order' element={<Order />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
