import "../css/About.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Heading from "../components/heading";
import { React } from "react";
import { Link } from "react-router-dom";

function About() {

    return (
        <div className="page-sizing" style={{padding:'.1px',backgroundImage:`url(${require('../images/cover.jpg')})`,height:'100vh'}}>
            <Nav about={true}/>
            <div className="about-container">
                <Heading item='About Us' />

                <div className="about-info-container" style={{opacity:'.9'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta quidem quo blanditiis deserunt eveniet aperiam officiis! Porro ipsa nostrum accusantium eligendi nobis, amet suscipit, laudantium iure, dolor unde impedit.
                    Incidunt corporis voluptatum molestiae eveniet alias quis rerum nemo tenetur fugit sunt <br/> fugiat illo ipsa saepe placeat, culpa debitis id iste officiis provident dolore, in quia? Voluptatibus excepturi deserunt dolores.
                    Obcaecati ad dolor fugiat quis consectetur nobis tempore, alias suscipit, itaque voluptatum id doloribus quos ex ratione voluptate repellat consequuntur qui. Quisquam iste minus ducimus quaerat in, ea possimus corporis.
                    Illum, consequuntur itaque optio eligendi, esse maiores nihil obcaecati numquam eum et nemo reprehenderit perspiciatis saepe? Nesciunt atque, sed vero,<br/> laudantium, numquam sit odit quae quaerat modi laborum delectus earum.
                    Quibusdam explicabo facilis sint doloribus excepturi, facere suscipit iusto nulla vel quaerat exercitationem repudiandae dignissimos quos esse fuga ab dolorem velit quae. Et numquam commodi sed illum illo sequi dolor.
                    Vel eligendi debitis itaque illo consequuntur repellendus tenetur aliquam, explicabo, dicta accusamus veritatis odio doloribus impedit quisquam quaerat, nesciunt animi ullam! Ducimus, impedit qui dolores quasi reiciendis explicabo sapiente distinctio.
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px',fontSize:'24px',fontWeight:'600'}}> Click Here to Shop Now<Link to="/" style={{textDecoration:'none'}}><button className="butt" style={{width:'100px',fontSize:'22px'}}>Shop</button></Link></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
