import "../css/Nav.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
function User(props) {
    const [show, setShow] = useState(false)
    const [keyword, setKeyword] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.reducers.cart);
    const currentUser = useSelector((state) => state.reducers.currentUser);
    const searchLink = useRef();
    return (
        <div className="nav-container">
            <nav >
                <div className="portion">
                    <Link style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/"> <h3 className="logo-text" >The Archive </h3></Link>
                </div><div className="buttons">

                </div>
                <div className="buttons" style={{ marginBottom: '10px' }}>
                    <SearchIcon className="icons" onClick={() => { setShow(!show) }} />
                    <div style={{ position: 'relative' }}>
                        {cart.length?<span className="icon-numbers">{cart.length}</span>:<></>}
                        <Link to="/cart"> <ShoppingCartIcon className="icons" /></Link>
                    </div>
                    <AccountCircleIcon className="icons" />
                    {currentUser.userName ? <h4 className="button" onClick={() => {
                        dispatch(logout());
                    }}>Logout</h4> : <><Link style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/register"><h4 className="button">Register</h4></Link>
                        <Link style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/login"> <h4 className="button">Login</h4></Link></>}
                </div>
            </nav >
            <div className="nav2">
                <div className="options">
                    {props.home ? <Link style={{ textDecoration: 'none', color: 'grey' }} to="/"><h4 className="opt">Home</h4></Link> : <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/"><h4 className="opt">Home</h4></Link>}
                    {props.shop ? <Link style={{ textDecoration: 'none', color: 'grey' }} to="/shop"><h4 className="opt">Shop</h4></Link> : <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/shop"><h4 className="opt">Shop</h4></Link>}
                    {props.tracking ? <Link style={{ textDecoration: 'none', color: 'grey' }} to="/"><h4 className="opt">Tracking</h4></Link> : <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/"><h4 className="opt">Tracking</h4></Link>}
                    {props.contact ? <Link style={{ textDecoration: 'none', color: 'grey' }} to="/contact-us"><h4 className="opt">Contact-Us</h4></Link> : <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/contact-us"><h4 className="opt">Contact-Us</h4></Link>}
                    {props.about ? <Link style={{ textDecoration: 'none', color: 'grey' }} to="/about"><h4 className="opt">About</h4></Link> : <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/about"><h4 className="opt">About</h4></Link>}
                </div>
            </div>
            {
                show ?
                    <div className="search-item">
                        <input autoFocus type="text" onKeyPress={(e) => { if (e.key === 'Enter') searchLink.current.click() }} onChange={(e) => { setKeyword(e.target.value) }} placeholder="Search for Books...." />
                        <Link ref={searchLink} style={{ textDecoration: 'none', color: 'rgb(66, 66, 66)', display: 'none' }} to={`/products/search?keyword=${keyword}`}>search</Link>
                    </div> :
                    <>
                    </>
            }
        </div >
    )

}
function Admin() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    return (
        <div className="admin-nav-container">
            <div className="admin-nav">
                <div className="box">
                    <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/admin"><h3 className="logo-title" > ᴀᴅᴍɪɴ </h3></Link>
                </div>
                <div className="box">
                    <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/admin">   <h3 className="elements" > Home </h3></Link>
                    <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/admin/order/pending">      <h3 className="elements" > Orders </h3></Link>
                    <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/admin/users">      <h3 className="elements" > Users </h3></Link>
                    <Link style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} to="/admin/addproduct">      <h3 className="elements" > Add Product </h3></Link>
                </div>
                <div className="box">
                    <AccountCircleIcon style={{ margin: '0px 15px 0 0px' }} />
                     <h3 className="logout"  onClick={()=>{
                        dispatch(logout());
                        navigate('/');
                     }}> logout </h3>
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
                    <Admin /> : <User home={props.home} about={props.about} shop={props.shop} contact={props.contact} />
            }

        </>

    )

}

export default Nav;
