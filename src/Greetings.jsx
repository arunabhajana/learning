const Name = "Arun";
const date = new Date();
const Greetings = () => {
    return (
        <div>
            <h1>Hi, {Name} </h1>
            <p>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
        </div>
    )
}

export default Greetings;