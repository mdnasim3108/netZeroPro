import { Fragment } from "react";
import "./login.css";
import { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock,faBuilding,faCheck } from "@fortawesome/free-solid-svg-icons";
const signUp = () => {
  return (
    <Fragment>
      <div className="loginForm pr-[3rem]">
        <form>
        <input
            placeholder="First Name"
            className="pl-[4rem] py-5 block  mb-[1rem] border-2 border-black"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          /> 
           <input
            placeholder="Last Name"
            className="pl-[4rem] py-5 block  border-2 border-black mb-[1rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
          <FontAwesomeIcon icon={faBuilding} className="absolute ml-[2rem] mt-[1.7rem] text-xl"/>
           <input
            placeholder="Company Code"
            className="pl-[4rem] py-5 block  border-2 border-black mb-[1rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          /> 
            <FontAwesomeIcon icon={faUser} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
          <input
            placeholder="Enter Your Email"
            className="pl-[4rem] py-5 block border-2 border-black mb-[1rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
            <FontAwesomeIcon icon={faLock} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
          <input
            placeholder="Enter Your Password"
            className="pl-[4rem] py-5 block border-2 border-black mb-[1rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
          <FontAwesomeIcon icon={faCheck} className="absolute ml-[2rem] mt-[1.7rem] text-xl"/>
            <input
            placeholder="Confirm Password"
            className="pl-[4rem] py-5 block border-2 border-black"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
          <div className="logFormBottom mt-8 flex justify-center">
            <button className="loginButton font-bold text-xl text-white">
              Sign Up
            </button>
          </div>
        </form>
        {/* <div className="altLogin flex mt-[4rem] justify-between w-[10rem]">
          <p className="text-lg" style={{ color: "darkgray" }}>
            Login With
          </p>
          <img
            src={google}
            className="w-[3rem] h-[3rem] relative bottom-2.5 cursor-pointer"
          />
        </div> */}
      </div>
    </Fragment>
  );
};
export default signUp;