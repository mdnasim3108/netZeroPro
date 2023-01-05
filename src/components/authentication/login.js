import { Fragment } from "react";
import { useState, useReducer } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/googleIcon.jpg";
const login = () => {
  return (
    <Fragment>
      <div className="loginForm pr-[3rem]">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <h3
          className="text-xl mt-[1rem] font-semibold"
          style={{ color: "darkgray" }}
        >
          Login to continue
        </h3>
        <form>
        <FontAwesomeIcon icon={faUser} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
          <input
            placeholder="Enter Your Email"
            className="pl-[4rem] py-5 block  border-2 border-black my-[2rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
         <FontAwesomeIcon icon={faLock} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
          <input
            placeholder="Enter Your Password"
            className="pl-[4rem] py-5 block border-2 border-black"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
          <div className="logFormBottom mt-8 flex">
            <button className="loginButton font-bold text-xl text-white mr-[5rem]">
              LOGIN
            </button>
            <p className="fgPass text-lg">Forgot password?</p>
          </div>
        </form>
        <div className="altLogin flex mt-[4rem] justify-between w-[10rem]">
          <p className="text-lg" style={{ color: "darkgray" }}>
            Login With
          </p>
          <img
            src={google}
            className="w-[3rem] h-[3rem] relative bottom-2.5 cursor-pointer"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default login;
