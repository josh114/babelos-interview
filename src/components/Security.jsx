import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

import leftIndex from "../assets/left-index.png";
import leftThumb from "../assets/left-thumb.png";
import rightIndex from "../assets/right-index.png";
import rightThumb from "../assets/right-thumb.png";
import useUserContext from "../hooks/useUserContext";
import { set } from "date-fns";

const Security = () => {
  const {
    data,
    handleRadio,
    handleBank,
    continueHide,
    setPage,
    farmHide,
    page,
  } = useUserContext();
  const [pageData, setPageData] = useState([false]);
  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);
  let dis;
  const hideButton = {
    display: "none",
  };
  const showButton = {
    display: "block",
  };
  farmHide ? (dis = hideButton) : (dis = showButton);

  const handleChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setPageData([true]);
    } else {
      setPageData([false]);
    }
  };
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
            <input type="checkbox" onChange={handleChange} />
            Skip for now
          </button>
        </div>
      </div>
      <div className="page-right_button-container">
        <button
          className={`button main_button`}
          disabled={page === 0}
          onClick={handlePrev}
          style={{ display: page === 3 ? "none" : "block" }}
        >
          Back
        </button>
        <button
          className="button green_button main_button"
          onClick={handleNext}
          disabled={!pageData.every(Boolean)}
          style={continueHide ? hideButton : showButton}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Security;
