import "../css/Products.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Heading from "../components/heading";
import Card from "../components/card";
import { Subscribe } from "../components/subscribe";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";
function Products(props) {
    const allProducts = useSelector((state) => state.reducers.allProducts);
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const keyword = query.get('category');
    const dispatch = useDispatch();
    useEffect(() => {
        !allProducts.products.length && fetch('http://localhost:1000/book/get')
             .then(res => res.json()).
             then(res => {
                 dispatch(setProducts(res))
             })
     }, [allProducts.products ])

    return (
        <div className="page-sizing">
            <Nav />
            <div className="whole-container" >
                <Heading item={keyword} />
                <div className="all-products-container">
                    <div >
                        <label htmlFor="sort">Sort-By</label>
                        <select>
                            <option>Price : low to high</option>
                            <option>Price : high to low</option>
                        </select>
                    </div>
                    <div className="products">
                    {allProducts?.products.filter((item=>item.category===keyword)).map((item)=>{
                            return(
                                <div >
                            <Card {...item} key={item._id}/>
                        </div>
                            )
                        })}

                    </div></div>
            </div>
            <Subscribe/>
            <Footer />
        </div>
    )
}

export default Products;
