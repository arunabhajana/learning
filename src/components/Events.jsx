const handleclick = () => {
    alert('Events Button Clicked');
}

const Events = () => {
    return (
        <div>
            <button onClick={ handleclick }>Click Me</button>
        </div>
    )
};

export default Events;

// Events - onClick