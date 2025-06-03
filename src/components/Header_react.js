import {LOGO_URL} from "../utils/constants.js";
import {useState} from "react";

const Header = ()=>{
    //let btn = "login"; js variable --> this does not render the UI --> so use spatial state variable
    let [btn,setbtn] = useState("login");

    return (<div className="header">
        <div className="logo">
            <img src= {LOGO_URL} alt="logo"></img>
        </div>
        <div className="headerComponents">
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>Cart</li>
                <button className="login-btn" 
                onClick={()=>
                    //btn="logout"
                    setbtn(btn === "login" ? "logout" : "login")
                }>{btn}</button>
            </ul>
        </div>
    </div>
);
};
    


export default Header;