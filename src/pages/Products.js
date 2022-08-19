import "../css/Products.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Heading from "../components/heading";
import Card from "../components/card";
import { Subscribe } from "../components/subscribe";
function Products(props) {
    return (
        <div className="page-sizing">
            <Nav />
            <div className="whole-container" >
                <Heading item='Horror Books' />
                <div className="all-products-container">
                    <div >
                        <label htmlFor="sort">Sort-By</label>
                        <select>
                            <option>Price : low to high</option>
                        </select>
                    </div>
                    <div className="products">
                        <Card img='book1.jpg' />
                        <Card img='book2.jpg' />
                        <Card img='book3.jpg' />
                        <Card img='book4.jpg' />
                        <Card img='book1.jpg' />
                        <Card img='book4.jpg' />
                        <Card img='book3.jpg' />
                        <Card img='book2.jpg' />
                    </div></div>
            </div>
            <Subscribe/>
            <Footer />
        </div>
    )
}

export default Products;
