import "../index.css"

const Button = ({onClick}) => {
    return (
        <button onClick={onClick}>Click Me!!!</button>
    )
}

const Handle = () => {
    const HandleClick = () => {
        alert("Button Clicked");
    }

    return <Button onClick={HandleClick}></Button>
}

export default Handle;

// Passing Function As A Prop In Component