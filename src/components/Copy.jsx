const copyHandler = () => {
    alert('You Have Copied Some Text');
}


const Copy = () => {
    return (
        <p onCopy={ copyHandler }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit minus vitae explicabo labore nam laudantium nobis at quibusdam vero!</p>
    )
}

export default Copy;