import Login from "./login";
import loginImg from "../../assets/loginCartoon.png";
import SignUp from "./signUp";
import { useState } from "react";
import Logo from "../../assets/Netzero.jpg";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Auth = () => {
  const [showLog, setShowLog] = useState(true);
  return (
    <>
      <div className="authContainer">
        <div className="top flex justify-between pt-[1.8rem] pl-[10rem] pr-[18rem] mb-[3rem]">
        <img src={Logo} className="w-[13rem] compLog"/>
          {/* <h2 className="text-3xl tracking-wide">NetzeroThink</h2> */}
          <div className="w-[10rem] h-[2rem] sm:w-[18rem] sm:h-[3rem] mt-1 sm:mt-0 rounded-[30px] flex justify-between bg-violet-700 items-center px-[2px] relative">
            <button className={`text-white font-bold rounded-[30px] h-[90%] w-[50%]`} onClick={()=>setShowLog(true)}>Login</button>
            <button className={` text-white font-bold rounded-[30px] w-[50%] h-[90%]`} onClick={()=>setShowLog(false)}>SignUp </button>
            <button
             className={`bg-white transition-all ease-in-out duration-[400ms] text-violet-600 font-bold rounded-[30px] w-[50%] h-[90%] absolute ${!showLog?"translate-x-[96.5%]":""}`}
             >{showLog?"Login":"SignUp"}</button>
          </div>
        </div>
        <div className="flex justify-between px-[6rem] logCont ">
          <div className="loginImg">
            <img src={loginImg} className="logCartImg" alt =""/>
          </div>
        {showLog?<Login/>:<SignUp/>}
        </div>
      </div>
    </>
  );
};
export default Auth;