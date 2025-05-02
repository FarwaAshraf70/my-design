import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [forget,setForget]=useState('')
  const defaultUsername = "admin";
  // const defaultPassword = "019283";
  const defaultPassword = localStorage.getItem("password") || "019283";

  const navigate = useNavigate();
  const myName = (e) => {
    setUserName(e.target.value);
  };
  const myPassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === defaultUsername && userPassword === defaultPassword) {
      navigate("/product");
    } else {
      Swal.fire("username or password is wrong");
    }
  };
 const forgetPassword=()=>{
  
 }
  

  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center "
        style={{
          minHeight: "100vh",
          width: "100vw",
          position: "fixed",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="wrapper rounded-3 p-3 bg-transparent"
        >
          <div className="">
            <h1 className="text-white text-center ">Login Form</h1>
            <div className=" mb-3">
              <label
                htmlFor="text"
                placeholder="My Name"
                className="ps-2 fs-6 text-white"
              >
                Your Name
              </label>
              <div className="input-group ">
                <input
                  type="text"
                  value={userName}
                  onChange={myName}
                  placeholder="My name"
                  className="rounded-2 ps-2 fs-6  "
                />
                <span className="input-group-text">
                  <FaUser className="fs-6" />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="text" className="ps-2 fs-6 text-white">
                Your Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  value={userPassword}
                  className="rounded-2 ps-2 fs-6"
                  onChange={myPassword}
                  placeholder="My password"
                />
                <span className="input-group-text">
                  <FaLock className="fs-6" />
                </span>
              </div>
            </div>
          </div>
          <div className="row text-center">
            {/* <div className="col-md-12"> */}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div
            className="
    mt-1"
          >
            <button className="btn btn-primary w-100 " type="submit">
              Login
            </button>
            <Link
              className="nav-link text-primary fs-6 text-white text-center mt-2 "
              to="/loginform" onClick={forgetPassword}
            >
              forget password
            </Link>
          </div>

          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;
