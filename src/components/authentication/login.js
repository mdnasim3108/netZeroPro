import { useState, useReducer,Fragment,useEffect } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/googleIcon.jpg";
const Login = () => {
    const [formIvsValid,setFormIsValid]=useState(false)
    const emailStateHandler=(state,action)=>{
        switch(action.type){
            case "user_input":
                return {email:action.value,isValid:action.value.includes("@")};
            case "input_blur":
                return {email:state.email,isValid:state.email.includes("@")};
            default:
                return {email:"",isValid:true}
        }
    }
    const passStateHandler=(state,action)=>{
        switch(action.type){
            case "user_input":
                return {pass:action.value,isValid:action.value>6}
            case "input_blur":
                return {pass:state.pass,isValid:state.pass>6}
            default:
                return {pass:"",isValid:true}
        }
        
    }
    const [emailState,dispatchEmail]=useReducer(emailStateHandler,{email:"",isValid:true})
    const [passState,dispatchPass]=useReducer(passStateHandler,{pass:"",isValid:true})
    const {isValid:emailIsValid}=emailState;
    const {isValid:passIsValid}=passState;
    useEffect(()=>{
            setFormIsValid(emailIsValid && passIsValid)
    },[emailIsValid,passIsValid])
    const formSubmitHandler=(e)=>{
        e.preventDefault()
        if(formIvsValid){
            alert("form is valid")
        }
    }
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
        <form onSubmit={formSubmitHandler}>
        <FontAwesomeIcon icon={faUser} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
          <input
            type="email"
            onChange={(e)=>dispatchEmail({type:"user_input",value:e.target.value})}
            onBlur={()=>dispatchEmail({type:"input_blur"})}
            placeholder="Enter Your Email"
            className="pl-[4rem] py-5 block  border-2 border-black mt-[2rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
          {!emailIsValid && <p className="ml-4 text-red-500">Enter a valid email</p>}
         <FontAwesomeIcon icon={faLock} className="absolute ml-[2rem] mt-[3.5rem] text-lg"/>
          <input
            onChange={(e)=>dispatchPass({type:"user_input",value:e.target.value})}
            onBlur={()=>dispatchPass({type:"input_blur"})}
            placeholder="Enter Your Password"
            className="pl-[4rem] py-5 block border-2 border-black mt-[2rem]"
            style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
          />
          {!passIsValid  && <p className="ml-4 text-red-500">Password must be atleast 6 characters</p>}
          <div className="logFormBottom mt-8 flex">
            <button className="loginButton font-bold text-xl text-white mr-[5rem]" type="submit">
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
            alt="google"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
