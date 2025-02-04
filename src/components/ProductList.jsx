
const ProductList = ({name , price , rating}) => {
    return (
        <div>
            <h3>Product Name: {name}</h3>
            <h3>Price: ${price}</h3>
            <h3>Rating: {rating} stars</h3>
        </div>
    )
}

export default ProductList;

// Multiple Props For Single Component