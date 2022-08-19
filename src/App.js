
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
import { Adminplaced } from "./pages/Adminplaced";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact-us' exact element={<Contact/>}/>
        <Route path='/products/horror' exact element={<Products/>}/>
        <Route path='/product/123' exact element={<Product/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/checkout' exact element={<Checkout/>}/>
        <Route path='/admin' exact element={<AdminHome/>}/>
        <Route path='/admin/order/placed' exact element={<Adminplaced/>}/>
      </Routes>
    </>
  );
}

export default App;
