import "./ProductList.css"
import Product from "../Product/Product"
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-text">
            <h1 className="pl-title">Previous Works - Title</h1>
            <p className="pl-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti alias quaerat, quibusdam quisquam accusamus nisi laborum vel iure consequatur, magnam veritatis ea reprehenderit, odio fuga? Incidunt cumque vel iure itaque.
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