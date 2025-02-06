const Card = ({ children }) => {
  return (
    <div style={{
       color: "white" ,
       backgroundColor : "teal" ,
       padding : "2rem" , 
       display: "inline-block"
      }}>{children}</div>
  )
}

export default Card;