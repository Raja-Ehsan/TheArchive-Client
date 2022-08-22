
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom"
import { Cart } from "./pages/Cart";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import { AdminHome } from "./pages/AdminHome";
import { Adminpending } from "./pages/Adminorders";
import { Adminusers } from "./pages/Adminusers";
import { Addproduct } from "./pages/Addproduct";
import { Shop } from "./pages/Shop";
import { Search } from "./pages/Search";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact-us' exact element={<Contact/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/products/search' exact element={<Search/>}/>
        <Route path='/product/:id' exact element={<Product/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/shop' exact element={<Shop/>}/>
        <Route path='/checkout' exact element={<Checkout/>}/>
        <Route path='/admin' exact element={<AdminHome/>}/>
        <Route path='/admin/order' exact element={<Adminpending/>}/>
        <Route path='/admin/users' exact element={<Adminusers/>}/>
        <Route path='/admin/addproduct' exact element={<Addproduct/>}/>
      </Routes>
    </>
  );
}

export default App;
