let cartItems = ["Iphone 13 Pro Max", "Samsung Galaxy S23 Ultra", "Nothing Phone 1"];


const Cart = () => {
    if (cartItems.length > 0) {
        return (
            <div>
                <h2>You Have {cartItems.length} In Your cart.</h2>
                <ul>
                    {cartItems.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        );
    } else {
        return <h2>No Items In Your Cart</h2>
    }
};

export default Cart;


// Conditional Rendering