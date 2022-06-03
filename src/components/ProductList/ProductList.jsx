import "./ProductList.css"
import Product from "../Product/Product"
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-text">
            <h1 className="pl-title">Previous Works</h1>
            <div className="line"></div>
            <p className="pl-description">
                Here are a few of my Favorite Projects I've had the awesome opportunity to work on
                <br/>I hope you'll love them as much as I do!
            </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList