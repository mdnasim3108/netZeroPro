import { Fragment, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const signUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
            className="pl-[4rem] py-5 inline  mb-[1rem] mr-[0.4rem] border-2 border-black authip w-[20.5rem] "
            style={{ fontSize: "1.1rem" }}
            onChange={formChange}
            required
          />
          <input
            id="lastName"
            placeholder="Last Name"
            name="LastName"
            value={lastName}
            className="pl-[4rem] py-5 inline  border-2 border-black mb-[1rem] authip w-[20.5rem]"
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
              className="pl-[4rem] py-5 inline mr-[0.4rem]  border-2 border-black mb-[1rem] authip w-[20.5rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
            {/* <input
              id = "companyName"
              placeholder="Company Name"
              name="companyName"
              value=""
              className="pl-[4rem] py-5 inline  border-2 border-black mb-[1rem] authip w-[20.5rem]"
              style={{ fontSize: "1.1rem" }} onChange = {formChange}
              required
            /> */}
            <select
              id="countries"
              class="mb-[1rem] authip border-2 border-black text-gray-500 text-sm  focus:ring-blue-500 focus:border-blue-500 py-5 pl-[4rem] dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500 inline w-[20.5rem]"
              style={{ fontSize: "1.1rem" }}
            >
              <option selected>Company Name</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
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
              className="pl-[4rem] py-5 block border-2 border-black mb-[1rem] authip w-[41.4rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLock}
              className="absolute ml-[2rem] mt-[1.7rem] text-lg"
            />
            <input
              id="password"
              name="Password"
              value={password}
              placeholder="Enter Your Password"
              className="pl-[4rem] py-5 block border-2 border-black mb-[1rem] authip w-[41.4rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCheck}
              className="absolute ml-[2rem] mt-[1.7rem] text-xl"
            />
            <input
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="pl-[4rem] py-5 block border-2 border-black authip w-[41.4rem]"
              style={{ fontSize: "1.1rem" }}
              onChange={formChange}
              required
            />
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
        {/* <div className="altLogin flex mt-[4rem] justify-between w-[10rem]">
          <p className="text-lg" style={{ color: "darkgray" }}>
            Login With
          </p>
          <img
            src={google}
            className="w-[3rem] h-[3rem] relative bottom-2.5 cursor-pointer"
          />
        </div> */}
      </div>
    </Fragment>
  );
};
export default signUp;
