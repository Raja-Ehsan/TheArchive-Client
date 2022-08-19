import "../css/card.css"
function Card(props) {
    return (
        <>
            <div className="product-card">
                <a href="/product/123"><img className="card-img" src={require(`../images/${props.img}`)} alt="" /></a>
                <div className="info-container">
                    <h2>Harry Potter</h2>
                    <h3>16$</h3>
                    <button>Add to Cart</button>
                </div>

            </div>
        </>
    )
}

export default Card;
