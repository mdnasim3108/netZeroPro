import Login from "./login";
import loginImg from "../../assets/loginCartoon.png";
import SignUp from "./signUp";
import { useState } from "react";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Auth = () => {
  const [showLog, setShowLog] = useState(true);
  return (
    <>
      <div className="authContainer">
        <div className="top flex justify-between pt-[1.5rem] pl-[10rem] lg:pr-[23rem]">
          <h2 className="text-3xl tracking-wide">NetzeroThink</h2>
          <div className="newUser">
            <span
              className="font-bold text-lg newUse mr-2 cursor-pointer"
              style={
                showLog
                  ? { fontSize: "1.3rem", color: "rgb(146, 56, 231)" }
                  : {}
              }
              onClick={()=>setShowLog(true)}
            >
              Login
            </span>
            <span
              className="font-bold cursor-pointer newUse"
              style={
                !showLog
                  ? { fontSize: "1.3rem", color: "rgb(146, 56, 231)" }
                  : {}
              }
              onClick={()=>setShowLog(false)}
            > 
              Sign UP
            </span>
          </div>
        </div>
        <div className="pt-[3rem] flex justify-between px-[6rem] logCont">
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