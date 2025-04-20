import React from "react";
import Signup from "./Signup";
import Login from "../Login/Login";

const LoginSign = () => {
    const username = localStorage.getItem("username");
    return (
        <div>
            {/* {username ? <Login /> : <Signup />} */}
            {username ? <Login/>: <Signup />}
        </div>
    )
}
export default LoginSign