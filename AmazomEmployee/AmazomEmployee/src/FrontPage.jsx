import React from "react";
import "./FrontPage.css";
import { Link, useNavigate } from "react-router-dom";

function FrontPage() {
  const navigate = useNavigate();
  return (
    <div className="firstpage">
      <div className="headig">
        <h1 className="stlabel">AMAZOM</h1>
        <h3 className="dLabel">Backend</h3>
      </div>

      <div className="secod">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup">Signup</button>
        </Link>

        
      </div>
    </div>
  );
}

export default FrontPage;
