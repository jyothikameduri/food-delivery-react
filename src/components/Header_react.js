import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{

    //let btn = "login"; js variable --> this does not render the UI --> so use spatial state variable
    let [ btn,setbtn ] = useState("login");
    return (
    <div className="flex justify-between bg-white shadow-lg">
        <div className="logo flex flex-col items-center object-contain">
            <img src={LOGO_URL} alt="logo" className="h-40 w-40  object-contain" />
            <p className="mt-1 text-xl font-semibold text-[#e03618]">QuikiEats</p>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
                <li className="px-4 text-base md:text-lg font-medium ">
                    {/** if <a> is used then the whole page get refreshed when u click */}
                    {/** (LINKING)--> THIS IS KNOWN AS SINGLE PAGE APPLICATION (SAP) */}
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 text-base md:text-lg font-medium">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="px-4 text-base md:text-lg font-medium">
                    <Link to="/about">About us</Link>
                </li >
                <li className="px-4 text-base md:text-lg font-medium">Cart</li>
                <button className="login-btn px-4 text-base md:text-lg font-medium" 
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