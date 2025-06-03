import {LOGO_URL} from "../utils/constants.js";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    //let btn = "login"; js variable --> this does not render the UI --> so use spatial state variable
    let [btn,setbtn] = useState("login");

    return (<div className="header">
        <div className="logo">
            <img src= {LOGO_URL} alt="logo"></img>
        </div>
        <div className="headerComponents">
            <ul>
                <li>
                    {/** if <a> is used then the whole page get refreshed when u click */}
                    {/** (LINKING)--> THIS IS KNOWN AS SINGLE PAGE APPLICATION (SAP) */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
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