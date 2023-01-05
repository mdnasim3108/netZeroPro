import Login from "./login";
import loginImg from "../../assets/loginCartoon.png";
import SignUp from "./signUp";
const auth = () => {
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
        <div className="pt-[3rem] flex justify-between px-[7rem]">
            <div className="loginImg">
                    <img src={loginImg}/>
            </div>
            <SignUp/>
        </div>
      </div>
    </>
  );
};
export default auth;
