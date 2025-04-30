import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../Firebase/Firebase.init";

const Login = () => {
  const provaider = new GoogleAuthProvider();
  const handleGoogle = () => {
    console.log("thukkn");
    signInWithPopup(auth, provaider)
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={handleGoogle}>sing in with google</button>
    </div>
  );
};

export default Login;
