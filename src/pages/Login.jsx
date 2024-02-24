import React, { useState } from "react";
import login from "../assets/login.png";
import { IoIosArrowBack } from "react-icons/io";
import PageImage from "../components/PageImage";
import fingerprint from "../assets/right-thumb.png";
import SmallScreenTopBar from "../components/SmallScreenTopBar";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const [msg, setMsg] = useState(
    "Phone number must have country code. E.g. +234"
  );
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const body = {
        credential,
        password,
      };
      const response = await login(body);
      if (response.error) {
        const message = response.error.data.message;
        setMsg(message);
        dispatch(setCredentials(credential, password));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page">
      <div className="page-rightsection">
        <div className="page-rightsection_content">
          <SmallScreenTopBar />
          <div className="page-rightsection_content-main">
            <div className="page-rightsection_content-main_title">
              <h1>Welcome back!</h1>
              <p>Welcome back! Please enter your details</p>
            </div>
            <div className="form">
              <div className="form-group">
                <label className="form-label" htmlFor="email-phone">
                  Email address/Phone number
                </label>
                <input
                  className="form-input"
                  id="email-phone"
                  name="email-phone"
                  type="text"
                  placeholder="Enter Email address or Phone number"
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
                <p className="form-error">{msg}</p>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email-phone">
                  Password
                </label>
                <div className="form-pair">
                  <div className="form-pair_item">
                    <input
                      className="form-input password"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <img src={fingerprint} height={40} alt="Fingerprint" />
                  </div>
                </div>
                <p className="form-error">{}</p>
              </div>
              <div className="form-group">
                <div className="form-pair">
                  <div>
                    <input
                      name="remember"
                      value={""}
                      onChange={() => {}}
                      type="checkbox"
                    />{" "}
                    <label className="form-label" htmlFor="remember">
                      Remember for 30 days
                    </label>
                  </div>
                  <div className="form-pair_last">
                    <a className="form-label form-link">Forgot password</a>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="form-button"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="form-text">
                Don't have an account? <a className="form-link">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
