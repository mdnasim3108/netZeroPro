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
        <div className="top flex justify-between pt-[2.9rem] pl-[10rem] pr-[23rem] mb-[5rem]">
        <img src={Logo} className="w-[13rem] compLog"/>
          {/* <h2 className="text-3xl tracking-wide">NetzeroThink</h2> */}
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
        <div className="flex justify-between px-[6rem] logCont">
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