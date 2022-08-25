import { Link } from "react-router-dom";
import "../css/footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
    return (

        <div className="footer">
            <div className="footer-options">
            <Link  style={{textDecoration:'underline',color:'grey'}} to="/"> <span className="footer-opt">Home</span></Link>
            <Link  style={{textDecoration:'underline',color:'grey'}} to="/shop"> <span className="footer-opt">Shop</span></Link>
            <Link  style={{textDecoration:'underline',color:'grey'}} to="/track"> <span className="footer-opt">Tracking</span></Link>
            <Link  style={{textDecoration:'underline',color:'grey'}} to="/contact-us"> <span className="footer-opt">Contact-Us</span></Link>
            <Link  style={{textDecoration:'underline',color:'grey'}} to='/about'> <span className="footer-opt">About</span></Link>
            </div>
            <div className="social-media">
                <span >  Contacts: </span>
                <span > <InstagramIcon  /></span>
                <span > <FacebookIcon /></span>
                <span > <WhatsAppIcon /></span>
                </div >
            </div>
            )
}

            export default Footer;
