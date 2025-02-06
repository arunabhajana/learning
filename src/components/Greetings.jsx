const styles = {
    color : "white", 
    backgroundColor : "crimson" , 
    padding : "2rem"
}

const Greetings = (props) => {
    return (
        <div>
            <p style={styles}>Hello! Great To See You Here {props.name}</p>
        </div>
    )
}

export default Greetings;


// Props Example (Not Destructured)