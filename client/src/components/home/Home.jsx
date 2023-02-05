import React from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import {useCookies} from "react-cookie";
const Home = () => {
  const [cookies] = useCookies(["user"]);
  const auth = getAuth();
  const user = auth.currentUser;

  if (user != null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  }

  const logout = () => {
    localStorage.removeItem("token-info");
    window.location.href = "/";
  };

  const portalHandler = () => {
    const email = cookies.user;
    axios
      .post("http://localhost:4000/customerPortal", { email })
      .then((res)=>{
        window.location.href=res.data.url;
      })
  };

  return (
    <div>
      <div>hello world! email </div>
      <div>
        <button onClick={logout}>Logout</button>
        <button
         className="cursor-pointer bg-gray-500 rounded px-4 ml-4"
         onClick={portalHandler}
         >Manage my billing info</button>
      </div>
    </div>
  );
};

export default Home;
