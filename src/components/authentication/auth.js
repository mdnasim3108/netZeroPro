import Login from "./login";
import loginImg from "../../assets/loginCartoon.png";
import SignUp from "./signUp";
import { useState } from "react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Auth = () => {
  const [showLog, setShowLog] = useState(true);
  return (
    <>
      <div className="authContainer">
        <div className="top flex justify-between pt-[4.5rem] pl-[10rem] lg:pr-[23rem]">
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
             <Login/>
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
              <SignUp />
            </span>
          </div>
        </div>
        <div className="pt-[3rem] flex justify-between px-[6rem] logCont">
          <div className="loginImg">
<<<<<<< HEAD
            <img src={loginImg} alt="" />
=======
            <img src={loginImg} className="logCartImg"/>
>>>>>>> aacb5cb1aab0be3e653ac07e2c43d68f6321e5fb
          </div>
        {showLog?<Login/>:<SignUp/>}
        </div>
      </div>
    </>
  );
};
export default Auth;
