import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./login.css";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import {
  faUser,
  faLock,
  faBuilding,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase-config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Action } from "@remix-run/router";

const SignUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState("");
  const [showPassword,setShowPassword]=useState(false)
  const numberHandler = (e) => {
    setValue(e.target.value);
  };
  const [isEqual, setIsEqual] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyCode: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, companyCode, email, password, confirmPassword } =
    formData;

  const formChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };
  useEffect(() => {
    setIsEqual(password === confirmPassword);
  }, [confirmPassword]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("inside onSubmit");
    try {
      const auth = getAuth();

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);

      if (user) {
        updateProfile(auth.currentUser, {
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }

      console.log(user.uid);
      const formDatacopy = { ...formData };
      delete formDatacopy.password;
      delete formDatacopy.confirmPassword;
      console.log("Details updated ");
      await setDoc(doc(db, "users", user.uid), formDatacopy);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="loginForm">
        <form onSubmit={onSubmit}>
          <input
            id="firstName"
            placeholder="First Name"
            name="FirstName"
            value={firstName}
            className="pl-[4rem] py-5 inline  mb-[1rem] mr-[0.4rem] border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
            style={{ fontSize: "1.1rem" }}
            onChange={formChange}
            required
          />
          <input
            id="lastName"
            placeholder="Last Name"
            name="LastName"
            value={lastName}
            className="pl-[4rem] py-5 inline  border-2  border-violet-700 focus:border-green-500 mb-[1rem] authip w-[20.5rem]"
            style={{ fontSize: "1.1rem" }}
            onChange={formChange}
            required
          />
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              className="absolute ml-[2rem] mt-[1.7rem] text-xl"
            />
            <input
              id="companyCode"
              value={companyCode}
              name="CompanyCode"
              placeholder="Company Code"
              className="pl-[4rem] py-5 inline mr-[0.4rem]  border-2  border-violet-700 focus:border-green-500 mb-[1rem] authip w-[20.5rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
            <select
              id="countries"
              class="mb-[1rem] authip border-2  border-violet-700 focus:border-green-500 text-gray-500 text-sm  focus:ring-blue-500  py-5 pl-[4rem] dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500 inline w-[20.5rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
            >
              <option selected>Company Name</option>
              <option value="US" className="">
                United States
              </option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="absolute ml-[2rem] mt-[1.7rem] text-lg"
            />
            <input
              id="email"
              value={email}
              name="Email"
              placeholder="Enter Your Email"
              className="pl-[4rem] py-5 block border-2  border-violet-700 focus:border-green-500 mb-[1rem] authip w-[41.4rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
          </div>
          <div className=" h-0 flex justify-end pr-[2rem] bg-red-500">
           {!showPassword?<AiFillEye
             className="text-[1.5rem] text-green-800 relative top-[1.55rem] cursor-pointer"
             onClick={()=>{setShowPassword((prev)=>!prev)}}
             />:
             <AiFillEyeInvisible
             className="text-[1.5rem] text-green-800 relative top-[1.55rem] cursor-pointer"
             onClick={()=>{setShowPassword((prev)=>!prev)}}
             />
             }
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLock}
              className="absolute ml-[2rem] mt-[1.7rem] text-lg"
            />
            <input
              id="password"
              name="Password"
              type={!showPassword?"password":"text"}
              value={password}
              minLength="6"
              placeholder="Enter Your Password"
              className="pl-[4rem] py-5 block border-2  border-violet-700 focus:border-green-500 mb-[1rem] authip w-[41.4rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCheck}
              className="absolute ml-[2rem] mt-[1.7rem] text-xl text-red-600"
              style={isEqual ? { color: "green" } : {}}
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="pl-[4rem] py-5 block border-2  border-violet-700 focus:border-green-500 authip w-[41.4rem]"
              style={{
                fontSize: "1.1rem",
                border: isEqual ? "" : "2px solid red",
              }}
              onChange={formChange}
              required
            />
            <p
              className="ml-10 mt-3 text-red-600"
              style={{ visibility: isEqual ? "hidden" : "visible" }}
            >
              Passwords don't match
            </p>
          </div>
          <div
            className="logFormBottom mt-8 flex"
            style={{ justifyContent: "center" }}
          >
            <button className="loginButton font-bold text-xl text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default SignUp;
