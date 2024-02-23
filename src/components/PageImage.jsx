import React from "react";
import personal from "../assets/personal.png";
import bank from "../assets/bank.png";
import account from "../assets/account.png";
import farm from "../assets/farm.png";
import login from "../assets/login.png";
import verify from "../assets/verify.png";

const PageImage = ({ image, page_type }) => {
  const display = {
    0: personal,
    1: bank,
    2: account,
    3: farm,
  };
  let displayImage;

  if (page_type === "login") {
    displayImage = login;
  } else if (page_type === "verification") {
    displayImage = verify;
  } else {
    displayImage = display[image];
  }

  return (
    <div className="page-image">
      <img
        className="page-image_main"
        src={displayImage}
        alt="personal information image"
      />
    </div>
  );
};

export default PageImage;
