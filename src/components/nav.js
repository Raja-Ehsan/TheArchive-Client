import "../css/Nav.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
function Nav() {
    return (
        <div className="nav-container">
            <nav >
                <div className="portion">
                   <h3 className="logo-text" >Words N’ Pages </h3>
                </div><div className="buttons">
                    
                </div>
                <div className="buttons" style={{ marginBottom: '10px' }}>
                    <SearchIcon className="icons"/>
                    <div style={{position:'relative'}}> 
                    <span className="icon-numbers">1</span>
                    <ShoppingCartIcon className="icons" />
                    </div>
                    <AccountCircleIcon className="icons" />
                    <h4 className="button">Register</h4>
                    <h4 className="button">Login</h4>   
                </div>

            </nav >
            <div className="nav2">
            <div className="options">
                <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">Home</h4></a>
                <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">Shop</h4></a>
                <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">Tracking</h4></a>
                <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">Blogs</h4></a>
                <a style={{ textDecoration: 'none', color: 'rgb(228, 228, 228)' }} href="/"><h4 className="opt">About</h4></a>
             </div>
        </div>


        </div >
    )
}

export default Nav;
