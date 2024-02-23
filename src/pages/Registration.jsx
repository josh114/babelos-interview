import React, { useState } from "react";

import Topbar from "../components/Topbar";

import UserInputs from "../components/UserInputs";
import useUserContext from "../hooks/useUserContext";

const Registration = () => {
  const { page, setPage, farmHide, disableNext, continueHide } =
    useUserContext();
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

  return (
    <div className="page">
      <div className="page-right">
        <UserInputs />
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
            disabled={disableNext}
            style={continueHide ? hideButton : showButton}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
