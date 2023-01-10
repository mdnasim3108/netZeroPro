import { useState, useReducer,Fragment,useEffect } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/googleSignin.jpg";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate, } from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
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
                return {pass:action.value,isValid:action.value.length>6}
            case "input_blur":
                return {pass:state.pass,isValid:state.pass.length>6}
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
    const formsubmitHandler= async(e)=>{
        e.preventDefault()
        if(formIvsValid){
            console.log("form is valid")
            const auth = getAuth()

            const userCredentials = await signInWithEmailAndPassword(auth,email,password)
            
            if (userCredentials.user) {
              navigate("/das")
              console.log("Fuckooff")
            }
        }
    }

    const [value,setValues] = useState("")
    const navigate = useNavigate();
    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
                   .then((result)=>{
                        console.log(result.user.photoURL);
                        setValues(result.user.email)
                        localStorage.setItem("email",result.user.email)  
                        navigate("/das");     
                   })
        }
 
        useEffect (() =>{
          setValues(localStorage.getItem("email"))
        
        }, [])


    const [formData,setFormData] = useState({
      email:'',
      password:'',
    })

    const {email,password} = formData;
            

    const formChange = (e) =>{
        setFormData((previousState)=>({
          ...previousState,[e.target.id] :e.target.value
        }))
        console.log(e.target.value);
    }

  return (
    <Fragment>
      <div className="loginForm pr-[3rem]">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <h3
          className="text-xl mt-[1rem] font-semibold mb-[3rem]"
          style={{ color: "darkgray" }}
        >
          Login to continue
        </h3>
        <form onSubmit={formsubmitHandler} autoComplete="off" className="">
        <FontAwesomeIcon icon={faUser} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
          <input
          id="email"
            type="email"
            name="email"
            value={email}
            onChange = {formChange}
            // onChange={(e)=>dispatchEmail({type:"user_input",value:e.target.value})}
            onBlur={()=>dispatchEmail({type:"input_blur"})}
            placeholder="Enter Your Email"
            className="pl-[4rem] py-5 block  border-2 border-black mt-[2rem] overflow-visible authip w-[36.5rem]"
            style={{ fontSize: "1.1rem",border:emailIsValid?"2.6px solid green":"2px solid red" }}
            autocomplete="new-password"
          />
          <p className="ml-4 text-red-500" style={{visibility:emailIsValid?"hidden":"visible"}}>Enter a valid email</p>
         <FontAwesomeIcon icon={faLock} className="absolute ml-[2rem] mt-[3.5rem] text-lg"/>
          <input
          id="password"
            type="password"
            name="new-password"
            value={password}
            onChange = {formChange}
            // onChange={(e)=>dispatchPass({type:"user_input",value:e.target.value})}
            onBlur={()=>dispatchPass({type:"input_blur"})}
            placeholder="Enter Your Password"
            className="pl-[4rem] py-5 block border-2 border-black mt-[2rem] authip w-[36.5rem]"
            style={{fontSize: "1.1rem",border:passIsValid?"2.6px solid green":"2px solid red"  }}
          />
          <p className="ml-4 text-red-500" style={{visibility:passIsValid?"hidden":"visible"}}>Password must be atleast 6 characters</p>
          <div className="logFormBottom mt-8 flex">
            <button className="loginButton font-bold text-xl text-white mr-[5rem]" type="submit">
              LOGIN
            </button>
            <p className="fgPass text-lg mt-[1.6rem]">Forgot password?</p>
          </div>
        </form>
        <div className="altLogin flex mt-[4rem] justify-between w-[20rem]">
          {/* <p className="text-lg" style={{ color: "darkgray" }}>
            Login With
          </p> */}
       <img
            src={google}
            className="w-[15rem] h-[4rem] relative bottom-2.5 cursor-pointer"
            alt="google"
            onClick={googleLogin}
          />
        
        </div>
      </div>
    </Fragment>
  );
};
export default Login;