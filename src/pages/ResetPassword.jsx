import React, { useState } from "react";
import Swal from "sweetalert2";

const resetPassword = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newpass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  // const [message,setMessage] =useState('')
  // const defaultPassword='019283'

  const defaultPassword = localStorage.getItem("password") || "019283";

  const currentPassword = (e) => {
    setCurrentPass(e.target.value);
  };
  const newPassword = (e) => {
    setNewPass(e.target.value);
  };
  const confirmNewPassword = (e) => {
    setConfirmPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPass !== defaultPassword) {
      Swal.fire("incorrect password");
      return;
    }

    if (newpass !== confirmPass) {

      Swal.fire("new password do not match");
      return;
    }
    localStorage.setItem("password", newpass);

    //  setMessage('password change successfully');
    setCurrentPass("");
    setConfirmPass("");
    setNewPass("");
    Swal.fire('password change successfully')
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ minHeight: "100vh" }}
      >
        <form className="shadow-lg" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-center" style={{ fontSize: "20px" }}>
              Reset Password
            </h3>
            <div className="">
              <label
                htmlFor=""
                placeholder="current password"
                className="ms-2 fs-6"
              >
                current password
              </label>
            </div>
            <div>
              <input
                type="password"
                className="ps-1 rounded-2 fs-6"
                value={currentPass}
                onChange={currentPassword}
                placeholder="current password"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="ms-2 fs-6">
              new password
            </label>
          </div>
          <div>
            <input
              type="password"
              value={newpass}
              className="ps-2 rounded-2 fs-6"
              onChange={newPassword}
              placeholder="new password"
            />
          </div>
          <div>
            <label
              htmlFor=""
              placeholder=" confirm new password"
              className="ms-2 fs-6 "
              style={{ fontWeight: "20px" }}
            >
              Confirm new password
            </label>
          </div>
          <div>
            <input
              type="password"
              value={confirmPass}
              className="ps-2 rounded-2 fs-6 "
              onChange={confirmNewPassword}
              placeholder="confirm password"
            />
          </div>
        
          {/* {message && <p className="text-center text-danger">{message}</p>} */}
          <button className="btn btn-primary d-flex align-items-center">
            change password
          </button>
        </form>
      </div>
    </>
  );
};

export default resetPassword;
