
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
import { useSelector } from "react-redux";
import { Restricted } from "./pages/Restricted";
import { Ty } from "./pages/ty";
import { Tracking } from "./pages/tracking";
function App() {
  const currentUser=useSelector((state)=>state.reducers.currentUser);
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
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
        <Route path='/track' exact element={<Tracking/>}/>
        <Route path='/ty' exact element={<Ty/>}/>
        <Route path='/admin' exact element={currentUser?.userRole==='Admin'?<AdminHome/>:<Restricted/>}/>
        <Route path='/admin/order' exact element={currentUser?.userRole==='Admin'?<Adminpending/>:<Restricted/>}/>
        <Route path='/admin/users' exact element={currentUser?.userRole==='Admin'?<Adminusers/>:<Restricted/>}/>
        <Route path='/admin/addproduct' exact element={currentUser?.userRole==='Admin'?<Addproduct/>:<Restricted/>}/>
      </Routes>
    </>
  );
}

export default App;
