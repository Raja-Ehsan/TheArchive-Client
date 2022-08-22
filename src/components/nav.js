import "../css/Nav.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function User() {
    const [show, setShow] = useState(false)
    const [keyword,setKeyword]=useState(null);
    const cart=useSelector((state)=>state.reducers.cart);
    const searchLink=useRef();
    return (
        <div className="nav-container">
            <nav >
                <div className="portion">
                    <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/"> <h3 className="logo-text" >𝓦𝓸𝓻𝓭𝓼 𝓝’ 𝓟𝓪𝓰𝓮𝓼 </h3></a>
                </div><div className="buttons">

                </div>
                <div className="buttons" style={{ marginBottom: '10px' }}>
                    <SearchIcon className="icons" onClick={()=>{setShow(!show)}} />
                    <div style={{ position: 'relative' }}>
                        <span className="icon-numbers">{cart.length}</span>
                        <Link to="/cart"> <ShoppingCartIcon className="icons" /></Link>
                    </div>
                    <AccountCircleIcon className="icons" />
                    <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/register"><h4 className="button">Register</h4></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/login"> <h4 className="button">Login</h4></a>
                </div>
            </nav >
            <div className="nav2">
                <div className="options">
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">Home</h4></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/shop"><h4 className="opt">Shop</h4></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">Tracking</h4></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/about"><h4 className="opt">About</h4></a>
                </div>
            </div>
            {
                show ?
                    <div className="search-item">
                        <input autoFocus type="text" onKeyPress={(e)=>{if(e.key === 'Enter')searchLink.current.click()}} onChange={(e)=>{setKeyword(e.target.value)}}  placeholder="Search for Books...."  />
                        <a ref={searchLink} style={{ textDecoration: 'none', color: 'rgb(66, 66, 66)',display:'none' }} href={`/products/search?keyword=${keyword}`}>search</a>
                    </div> :
                    <>
                    </>
            }
        </div >
    )

}
function Admin() {
    return (
        <div className="admin-nav-container">
            <div className="admin-nav">
                <div className="box">
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/admin"><h3 className="logo-title" > ᴀᴅᴍɪɴ </h3></a>
                </div>
                <div className="box">
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/admin">   <h3 className="elements" > Home </h3></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/admin/order/pending">      <h3 className="elements" > Orders </h3></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/admin/users">      <h3 className="elements" > Users </h3></a>
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/admin/addproduct">      <h3 className="elements" > Add Product </h3></a>
                </div>
                <div className="box">
                    <AccountCircleIcon style={{ margin: '0px 15px 0 0px' }} />
                    <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/admin">  <h3 className="logout" > logout </h3></a>
                </div>
            </div >
        </div >
    )

}
function Nav(props) {
    return (
        <>
            {
                props.admin ?
                    <Admin /> : <User />
            }

        </>

    )

}

export default Nav;
