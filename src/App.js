import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import  ShopDisplay  from './pages/ShopDisplay';
import Cart from './pages/Cart'
import ContactForm from './components/ContactForm';

import { ToastContainer } from 'react-toastify';
import Checkout from './pages/Checkout';


function App() {

  

  return (
    <>
      <Router>
        <ToastContainer/>
      <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>           
            <Route path="/shop" element={<ShopDisplay/>}/>           
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
