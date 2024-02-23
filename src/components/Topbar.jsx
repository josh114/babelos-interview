import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_main">
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
            Already have an account? &nbsp;
            <a href="/login" className="topbar-right_link-text">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
