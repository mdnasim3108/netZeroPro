import { useState, Fragment, useEffect } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/googleIcon.jpg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

import { getAuth , signInWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Login = () => {

  const toastifySuccess = () => {
    toast.success("Successfully LogedIn !", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const toastifyFailure = () => {
  
    toast.error("Invail Email or Password !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  const [formIvsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passIsValid, setPassIsValid] = useState(true);


  const formsubmitHandler = async (e) => {
    e.preventDefault();
    
    if (formIvsValid) {
      const auth = getAuth();

       await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then(()=>{

        toastifySuccess()                                                                                           
        setTimeout(() => {
          navigate("/payment")
        }, 3000);
        
      }).catch((error)=>{
        console.log(error);
        toastifyFailure();
      })     
    }
  };

  const [value, setValues] = useState("");
  

  const navigate = useNavigate();
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user.photoURL);
      setValues(result.user.email);
      localStorage.setItem("email", result.user.email);
      navigate("/payment");
    }).catch (()=>{
        toastifyFailure();
    })
  };

  useEffect(() => {
    setValues(localStorage.getItem("email"));
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const formChange = (e) => {
    // console.log(e);
    if(e.target.id === "email"){
      setEmailIsValid(e.target.value.includes("@") && e.target.value.includes("."));
    }
    if(e.target.id === "password"){
      setPassIsValid(e.target.value.length>=6);
    }
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
    // console.log(e.target.value);
  };
  useEffect(() => {
    setFormIsValid(emailIsValid && passIsValid);
  }, [emailIsValid, passIsValid]);
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
        
          <FontAwesomeIcon
            icon={faUser}
            className="absolute ml-[2rem] mt-[1.7rem] text-lg"
          />
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={formChange}
            placeholder="Enter Your Email"
            className={`pl-[4rem] py-5 block  border-2  mt-[2rem] overflow-visible authip w-[36.5rem] border-violet-700 focus:border-green-500 ${emailIsValid?"":"focus:border-red-500"}`}
            style={{
              fontSize: "1.1rem",
            }}
            autocomplete="new-password"
          />
          <p
            className="ml-4 text-red-500"
            style={{ visibility: emailIsValid ? "hidden" : "visible" }}
          >
            Enter a valid email
          </p>
          <FontAwesomeIcon
            icon={faLock}
            className="absolute ml-[2rem] mt-[3.5rem] text-lg"
          />
          <input
            id="password"
            type="password"
            name="new-password"
            value={password}
            onChange={formChange}
            placeholder="Enter Your Password"
            className={`pl-[4rem] py-5 block border-2  border-violet-700 focus:border-green-500 mt-[2rem] authip w-[36.5rem] ${passIsValid?"":"focus:border-red-500"}`}
            style={{
              fontSize: "1.1rem",
            }}
          />
          <p
            className="ml-4 text-red-500"
            style={{ visibility: passIsValid ? "hidden" : "visible" }}
          >
            Password must be atleast 6 characters
          </p>
          <div className="logFormBottom mt-8 flex">
            <button
              className="loginButton font-bold text-xl text-white mr-[5rem]"
              type="submit"
            >
              LOGIN
            </button>
            <ToastContainer />
            <p className="fgPass text-lg mt-[1.6rem]">Forgot password?</p>
          </div>
          
        </form>
        <div className="altLogin mt-[4rem] w-[35rem] flex">
        
          <div className="w-[17rem] h-[4rem] bg-blue-500 cursor-pointer relative bottom-2.5 flex py-[1rem] pr-[1rem] pl-[1rem] rounded" onClick={googleLogin}>
              <img alt ="" src={google} className="w-[2rem] h-[2rem]"/>
              <p className="text-white text-lg ml-[1rem]">Sign in with google</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
