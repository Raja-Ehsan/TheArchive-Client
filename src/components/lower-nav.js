import "../css/lower-nav.css"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StoreIcon from '@mui/icons-material/Store';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { Link } from "react-router-dom";

function Lower() {
    return (

        <div className="lower-nav">
            <div className="optionss">
            <Link  style={{textDecoration:'none'}} to="/"><HomeIcon fontSize="large" className="opts" htmlColor="rgb(140, 140, 140)"   /></Link>
            <Link  style={{textDecoration:'none'}} to="/shop"><StoreIcon fontSize="large" className="opts" htmlColor="rgb(140, 140, 140)"/></Link>
            <Link  style={{textDecoration:'none'}} to="/"><LocationSearchingIcon fontSize="large" className="opts" htmlColor="rgb(140, 140, 140)"   /></Link>
            <Link  style={{textDecoration:'none'}} to="/about"><InfoIcon fontSize="large" className="opts" htmlColor="rgb(140, 140, 140)"   /></Link>
            <Link  style={{textDecoration:'none'}} to="/contact-us"><ContactMailIcon fontSize="large" className="opts" htmlColor="rgb(140, 140, 140)"   /></Link>
            </div>
        </div>
    )
}

export default Lower;
