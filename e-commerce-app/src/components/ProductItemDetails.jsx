
import styles from "./products.module.css"
function ProductDetails(props) {

  return (

    <div className={styles.productdetails} >
      <h2>Product Details</h2>
      <h3> {props.product.name} </h3>
      <p>${props.product.price} </p>
      <p>{props.product.description} </p>
    </div>

  )

}

export default ProductDetails