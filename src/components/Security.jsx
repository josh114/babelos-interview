import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

import leftIndex from "../assets/left-index.png";
import leftThumb from "../assets/left-thumb.png";
import rightIndex from "../assets/right-index.png";
import rightThumb from "../assets/right-thumb.png";

const Security = () => {
  return (
    <div className="security form">
      <div className="security-content">
        <div className="security-content-title">
          <h3>
            Security - Setup Fingerprint{" "}
            <span className="form-label_italic">(Optional)</span>
          </h3>
        </div>
        <div className="security-content-detail">
          <p>Capture Fingerprint (Your L-R Index fingers)</p>
          <div className="security-group">
            <div className="security-group_item">
              <img src={leftThumb} alt="" />
              <p>Left thumb</p>
            </div>

            <div className="security-group_item">
              <img src={leftIndex} alt="" />
              <p>Left Index</p>
            </div>

            <div className="security-group_item">
              <img src={rightThumb} alt="" />
              <p>Right thumb</p>
            </div>

            <div className="security-group_item">
              <img src={rightIndex} alt="" />
              <p>Right Index</p>
            </div>
          </div>
        </div>

        <div className="security-warning">
          <div className="security-warning_detail">
            <RiErrorWarningLine className="security-warning_icon" />
            <p>
              Place your finger on the fingerprint scanner to capture your
              fingerprint. Ensure your finger covers the entire scanner.
            </p>
          </div>
        </div>

        <div className="security-skip">
          <button className="button">
            <input type="checkbox" />
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
