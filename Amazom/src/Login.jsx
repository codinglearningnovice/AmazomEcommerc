import React, {useState} from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "./Authentication"
//import { auth } from './firebase';



function Login() {
  const navigate = useNavigate(); //useHistory();
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  

  const user = email;
  const pwd = password;

  const signin = async(e) => {
    e.preventDefault();
    try {
      const { status, data } = await signInWithEmailAndPassword(user, pwd);
      console.log("Response:", status, data);

      if (status === 201) {
        navigate("/");
      } else {
        alert(
          data.message || "check your credentials again"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "An error occurred.");
    }
  }
  
  const register = async (e) => {
    e.preventDefault();
    
    try {
      const { status, data } = await createUserWithEmailAndPassword(user, pwd);
      console.log("Response:", status, data);

      if (status === 201) {
        navigate("/");
      } else {
        alert(
          data.message || "Failed to register. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "An error occurred.");
    }
  };
  

  return (
    <div className="logi">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="logi_img"
        />
      </Link>

      <div className="logi_container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="logi_sigi" onClick={signin} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signig i you agree to the terrms ad coditios that this is a fake
          amazom
        </p>
        <button className="logi_register" onClick={register} type="submit">
          Create an amazom accout
        </button>
      </div>
    </div>
  );
}

export default Login