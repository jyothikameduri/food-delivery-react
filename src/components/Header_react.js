import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  //let btn = "login"; js variable --> this does not render the UI --> so use spatial state variable
  let [btn, setbtn] = useState("login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-white shadow-lg my-0 mx-[12.333px]">
      <div className="logo flex flex-col items-center object-contain">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="w-[48.2px] h-[48.2px]  object-contain"
          />
        </Link>
        <p className="mt-1 text-xl font-[16px] text-[#e03618]">QuikiEats</p>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 text-base md:text-lg font-[16px] hover:text-[#e03618] ">
            {/** if <a> is used then the whole page get refreshed when u click */}
            {/** (LINKING)--> THIS IS KNOWN AS SINGLE PAGE APPLICATION (SAP) */}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-base md:text-lg font-[16px] hover:text-[#e03618]">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 text-base md:text-lg font-[16px] hover:text-[#e03618]">
            <Link to="/cart" data-testid="cart-link">
              <FontAwesomeIcon icon={faCartShopping} />-
              <span className="text-green-300">
                {" "}
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </Link>
          </li>
          <button
            className="login-btn px-4 text-base md:text-lg font-[16px] hover:text-[#e03618]"
            onClick={() =>
              //btn="logout"
              setbtn(btn === "login" ? "logout" : "login")
            }
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
