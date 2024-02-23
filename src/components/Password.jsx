import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import useUserContext from "../hooks/useUserContext";

const Password = () => {
  const { handlePassword } = useUserContext();
  //   let cond1;
  const [cond1, setCond1] = useState();
  const [cond2, setCond2] = useState();
  const [cond3, setCond3] = useState();
  const [cond4, setCond4] = useState();
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState(true);
  const [validateDisplay, setValidateDisplay] = useState(false);

  const handleFocus = (e) => {
    setValidateDisplay(true);
  };

  const confirmPassword = (e) => {
    const pass = e.target.value;
    setConPassword(pass === password);
    handlePassword(password);
  };

  const validatePassword = (e) => {
    const passwrd = e.target.value;
    setCond1(passwrd.length >= 8);
    setCond2(/[^\w_ ]/.test(passwrd));
    setCond3(/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwrd));
    setCond4(/\d/.test(passwrd));
    setPassword(passwrd);
  };

  return (
    <div className="form-password">
      <div className="form-group">
        <label htmlFor="password">Create Password</label>
        <input
          className="form-input"
          id="password"
          type="password"
          onChange={validatePassword}
          onFocus={handleFocus}
        />
      </div>
      <div
        className="form-password_note"
        style={{ display: validateDisplay ? "block" : "none" }}
      >
        <div
          className="form-password_note-group"
          style={{ color: cond1 ? "green" : "red" }}
        >
          <RiErrorWarningLine display={cond1 ? "none" : "block"} />
          <FaRegCircleCheck display={cond1 ? "block" : "none"} />
          <p>Must be at least 8 characters</p>
        </div>
        <div
          className="form-password_note-group"
          style={{ color: cond2 ? "green" : "red" }}
        >
          <RiErrorWarningLine display={cond2 ? "none" : "block"} />
          <FaRegCircleCheck display={cond2 ? "block" : "none"} />
          <p>Must contain one special character Ex. #!*/</p>
        </div>
        <div
          className="form-password_note-group"
          style={{ color: cond3 ? "green" : "red" }}
        >
          <RiErrorWarningLine display={cond3 ? "none" : "block"} />
          <FaRegCircleCheck display={cond3 ? "block" : "none"} />
          <p>Must have 1 Uppercase letter and 1 lowercase</p>
        </div>
        <div
          className="form-password_note-group"
          style={{ color: cond4 ? "green" : "red" }}
        >
          <RiErrorWarningLine display={cond4 ? "none" : "block"} />
          <FaRegCircleCheck display={cond4 ? "block" : "none"} />
          <p>Must contain a number </p>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          className="form-input"
          id="confirm_password"
          type="password"
          style={{ border: conPassword ? "" : "1px solid red" }}
          onChange={confirmPassword}
        />
      </div>
      <div>
        <p
          style={{
            color: conPassword ? "" : "red",
            display: conPassword ? "none" : "block",
            fontSize: "12px",
          }}
        >
          passwords do not match
        </p>
      </div>
    </div>
  );
};

export default Password;
