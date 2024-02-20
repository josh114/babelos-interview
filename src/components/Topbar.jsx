import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-left_icon">
          <IoIosArrowBack />
        </div>
        <div className="topbar-left_link">
          <a href="/" className="topbar-left_link-text">
            Back home
          </a>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-right_link">
          <p>Already have an account?</p>
        </div>
        <div className="topbar-right_link">
          <a href="/login" className="topbar-right_link-text">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
