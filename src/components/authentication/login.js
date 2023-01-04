import { useState, useReducer } from "react";
import './login.css'
import loginImg from '../../assets/loginCartoon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import google from '../../assets/googleIcon.jpg'
const login = () => {
  return (
    <>
      <div className="authContainer">
        <div className="top flex justify-between pt-[4.5rem] px-[10rem]">
          <h2 className="text-3xl tracking-wide">NetzeroThink</h2>
          <div className="newUser">
            <span className="font-bold text-lg newUse mr-2">New User?</span>
            <span><a href="#" className="font-bold" style={{fontSize:"1.3rem",textDecoration:"none",color:"rgb(146, 56, 231)"}}>Sign UP</a></span>
          </div>
        </div>
        <div className="loginContainer flex justify-between px-[7rem]">
            <div className="loginImg">
                    <img src={loginImg}/>
            </div>
            <div className="loginForm pr-[3rem]">
                  <h1 className="text-4xl font-bold">Welcome Back!</h1>
                  <h3 className="text-xl mt-[1rem] font-semibold" style={{color:"darkgray"}}>Login to continue</h3>
                  <form>
                        <div className="userIcon">
                          <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <input placeholder="Enter Your Email" className="pl-[4rem] py-5 block  border-2 border-black" style={{paddingRight:"20rem",fontSize:"1.1rem"}}/>
                        <div className="passIcon">
                          <FontAwesomeIcon icon={faLock}/>
                        </div>
                        <input placeholder="Enter Your Password" className="pl-[4rem] py-5 block border-2 border-black" style={{paddingRight:"20rem",fontSize:"1.1rem"}}/>
                        <div className="logFormBottom mt-8 flex">
                          <button className="loginButton font-bold text-xl text-white">LOGIN</button>
                          <p className="fgPass text-lg">Forgot password?</p>
                        </div>
                  </form>
                  <div className="altLogin flex mt-[4rem] justify-between w-[10rem]">
                    <p className="text-lg" style={{color:"darkgray"}}>Login With</p>
                    <img src={google} className="w-[3rem] h-[3rem] relative bottom-2.5 cursor-pointer"/>
                  </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default login;
