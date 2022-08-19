import "../css/Contact.css"
import Nav from "../components/nav";
import Heading from "../components/heading";
import Footer from "../components/footer";
function Contact() {
    return (
        <div className="page-sizing" >
            <Nav />
            <div className="search-container">
                <Heading item="Contact-Us" />
                <div className="contact-container">
                   <h2> Feel Free to Contact Us</h2> 
                   <form action="#">
                   <input type='text' placeholder="Enter your Name"  required/>
                   <input type='number'   placeholder="Enter your Phone Number" required/>
                   <input type='text' placeholder="Enter your Email Address" required/>
                   <textarea placeholder="How Can We Help You?" required></textarea>
                   <br />
                   <button type="submit" onClick={()=>{
                    window.location.reload(false);}}> Send</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
