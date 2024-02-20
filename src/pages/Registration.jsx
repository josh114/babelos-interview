import React from "react";
import PageImage from "../components/PageImage";
import personal from "../assets/personal.png";
import Topbar from "../components/Topbar";
import Personal from "../components/Personal";
import Bank from "../components/Bank";
import Security from "../components/Security";
import Farm from "../components/Farm";

const Registration = () => {
  return (
    <div className="page">
      <div className="page-left">
        <div className="page-left_image">
          <PageImage image={personal} />
        </div>
      </div>
      <div className="page-right">
        <div className="page-right_content">
          <div className="page-right_content-topbar">
            <Topbar />
          </div>
        </div>
        {/* <Personal /> */}
        {/* <Bank /> */}
        {/* <Security /> */}
        <Farm />
      </div>
    </div>
  );
};

export default Registration;
