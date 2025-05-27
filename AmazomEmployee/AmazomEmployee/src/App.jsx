

import "./App.css";
import FrontPage from "./FrontPage";
import LoginPage from "./LoginPage";
import PostProduct from "./PostProduct";
import SignupPage from "./SignupPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import api from "./axios";


const PrivateRoute = ({ element }) => {
  const [{ authuser }] = useStateValue();
  //console.log("User state:", authuser);
  //console.log("Login successful, navigating...");

  return authuser ? element : <Navigate to="/login" />;}

function App() {

  const [{authuser}] = useStateValue();

  useEffect(() => {
    const getUser = () => {
      try {
        
        if (authuser) {
          dispatch({
             type: "Set_User", 
             authuser: authuser
             });}
      } catch (error) {
      }
    };
    getUser();

  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            
            path="/postproduct"
            element={<PrivateRoute element={<PostProduct />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

