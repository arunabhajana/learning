const UserStatus = ({isLoggedin , isAdmin}) => {
    if(isLoggedin && isAdmin){
        return <h2>Welcome Admin</h2>
    }else if(!isLoggedin){
        return <h2>Please Log In</h2>
    }else{
        return <h2>Welcome User</h2>
    }
}

export default UserStatus;
