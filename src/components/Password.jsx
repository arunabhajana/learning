// Conditional Rendering - Password Checker

export const ValidPassword = () => {
  return (
    <div>Valid Password</div>
  )
}

export const InvalidPassword = () => {
    return (
      <div>Invalid Password</div>
    )
  }


export const Password = ({isValid}) => {

    if(isValid){
        return <ValidPassword />
    }
    return <InvalidPassword />
};


export default Password;