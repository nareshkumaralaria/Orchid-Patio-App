import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginAdmin } from "../../Service/api";
import "./admin.css";


const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailUpdate = (e) => {

    setEmail(e.target.value)
  }

  const passwordUpdate = (e) => {
    setPassword(e.target.value);
  }

  const userLogin = async () => {
    const credentials = { 'username': email, 'password': password };
   const res = await loginAdmin(credentials);
    if(res.data.user){
      localStorage.setItem('token',res.data.user)
      window.location.href="/userList";
    }else{
      alert("Invalid Username/password");
    }
  }
  return (
    <div className="card admin-login-card card-style mb-0 bg-transparent shadow-0 bg-3 mx-0 rounded-0 full-height">
      <div className="card-center">
        <div className="card card-style">
          <div className="content">
            <h1 className="text-center font-800 font-30 mb-2">Admin Sign In</h1>
            <p className="text-center font-13 mt-n2 mb-3">
              Enter your Credentials
            </p>
            <div className="form-custom form-label form-icon mb-3">
              <i className="bi bi-person-circle font-14"></i>
              <input
                type="text"
                className="form-control rounded-xs"
                id="c1"
                onChange={(e) => emailUpdate(e)}
                placeholder="Username"
              />
              <label htmlFor="c1" className="color-theme">
                Your Name
              </label>
              <span>(required)</span>
            </div>
            <div className="form-custom form-label form-icon mb-3">
              <i className="bi bi-asterisk font-12"></i>
              <input
                type="password"
                className="form-control rounded-xs"
                id="c2"
                onChange={(e) => passwordUpdate(e)}
                placeholder="Password"
              />
              <label htmlFor="c2" className="color-theme">
                Password
              </label>
              <span>(required)</span>
            </div>
            <button onClick={userLogin}
              className="btn rounded-sm btn-m gradient-green text-uppercase mt-4 mb-3 btn-full shadow-bg shadow-bg-s"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
