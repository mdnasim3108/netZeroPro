import { Fragment ,useState} from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock,faBuilding,faCheck } from "@fortawesome/free-solid-svg-icons";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {db} from "../../firebase-config"
import { doc, setDoc , serverTimestamp } from "firebase/firestore"; 

const signUp = () => {
 
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyCode: "",
    email:"",
    password: "",
    confirmPassword: "",
  });

  const {firstName,lastName,companyCode,email,password,confirmPassword} = formData;

  const formChange = (e) =>{
    setFormData((previousState)=>({
      ...previousState,[e.target.id] :e.target.value
    }))

  }
 
 const  onSubmit = async(e) =>{
  e.preventDefault();
  console.log("inside onSubmit");

  try {
    
    const auth = getAuth();

    const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
    const user = userCredentials.user;
    console.log(user);

    if (user){
      updateProfile(auth.currentUser,{
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
    }

    console.log(user.uid);
      const formDatacopy = {...formData};
      delete formDatacopy.password;
      delete formDatacopy.confirmPassword;
      console.log("Details updated ");
      await setDoc(doc(db,'users',user.uid),formDatacopy);

  } catch (error) {
    console.log(error);
  }

 }



  return (
    <Fragment>
      <div className="loginForm pr-[3rem]">
        <form onSubmit={onSubmit}>
            <input
              id = "firstName"
              placeholder="First Name"
              name="FirstName"
              value={firstName}
              className="pl-[4rem] py-5 block  mb-[1rem] border-2 border-black"
              style={{ paddingRight: "20rem", fontSize: "1.1rem" }}
              onChange = {formChange}
              required
            /> 
            <input
              id = "lastName"
              placeholder="Last Name"
              name="LastName"
              value={lastName}
              className="pl-[4rem] py-5 block  border-2 border-black mb-[1rem]"
              style={{ paddingRight: "20rem", fontSize: "1.1rem" }} onChange = {formChange}
              required
            />
            <FontAwesomeIcon icon={faBuilding} className="absolute ml-[2rem] mt-[1.7rem] text-xl"/>
            <input
              id = "companyCode"
              value={companyCode}
              name="CompanyCode"
              placeholder="Company Code"
              className="pl-[4rem] py-5 block  border-2 border-black mb-[1rem]"
              style={{ paddingRight: "20rem", fontSize: "1.1rem" }} onChange = {formChange}
              required
            /> 
              <FontAwesomeIcon icon={faUser} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
            <input
              id = "email"
              value={email}
              name = "Email"
              placeholder="Enter Your Email"
              className="pl-[4rem] py-5 block border-2 border-black mb-[1rem]"
              style={{ paddingRight: "20rem", fontSize: "1.1rem" }} onChange = {formChange}
              required
            />
              <FontAwesomeIcon icon={faLock} className="absolute ml-[2rem] mt-[1.7rem] text-lg"/>
            <input
              id = "password"
              name="Password"
              value={password}
              placeholder="Enter Your Password"
              className="pl-[4rem] py-5 block border-2 border-black mb-[1rem]"
              style={{ paddingRight: "20rem", fontSize: "1.1rem" }} onChange = {formChange}
              required
            />
            <FontAwesomeIcon icon={faCheck} className="absolute ml-[2rem] mt-[1.7rem] text-xl"/>
              <input
              id = "confirmPassword"
              value={confirmPassword}

              placeholder="Confirm Password"
              className="pl-[4rem] py-5 block border-2 border-black"
              style={{ paddingRight: "20rem", fontSize: "1.1rem" }} onChange = {formChange}
              required
            />
            <div className="logFormBottom mt-8 flex justify-center">
              <button className="loginButton font-bold text-xl text-white" >
                Sign Up
              </button>
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
export default signUp;