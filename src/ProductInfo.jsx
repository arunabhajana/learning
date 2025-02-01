const product = {
    name: 'Laptop',
    price: 1200,
    availability: 'In Stock'
}

const ProductInfo = () => {
    return (
        <div>
            <h2>Product Info</h2>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Availability: {product.availability}</p>
        </div>
    )
}

export default ProductInfo;