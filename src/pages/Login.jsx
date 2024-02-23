import React from "react";
import login from "../assets/login.png";
import { IoIosArrowBack } from "react-icons/io";
import PageImage from "../components/PageImage";
import fingerprint from "../assets/right-thumb.png";
import SmallScreenTopBar from "../components/SmallScreenTopBar";

const Login = () => {
  return (
    <div className="page">
      {/* <div className="page-left">
        <div className="page-left_image">
          <PageImage page_type={"login"} />
        </div>
      </div> */}
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
                  value={""}
                  onChange={() => {}}
                  required
                />
                <p className="form-error">
                  This phone number is not verified. Log in with email instead
                </p>
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
                      value={""}
                      onChange={() => {}}
                      required
                    />
                  </div>

                  <div>
                    <img src={fingerprint} height={40} alt="Fingerprint" />
                  </div>
                </div>
                <p className="form-error">
                  This phone number is not verified. Log in with email instead
                </p>
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
              <button type="submit" className="form-button">
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
