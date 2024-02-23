import React from "react";
import useUserContext from "../hooks/useUserContext";
import { FaCheck } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";

const Stepper = () => {
  const { page } = useUserContext();
  return (
    <div className="page-holder">
      <div className="page-stepper">
        <div className="page-stepper_steps">
          <span
            className={`page-stepper_steps-step1 ${page >= 0 && "active-step"} ${page === 0 && "current-step"}`}
          >
            {page > 0 ? <FaCheck className="check-icon-mobile" /> : <VscCircleFilled className="check-icon-mobile" />}
          </span>
          <span
            className={`page-stepper_steps-step2 ${page >= 1 && "active-step"}  ${page === 1 && "current-step"}`}
          >
            {page > 1 ? <FaCheck className="check-icon-mobile" /> : <VscCircleFilled className="check-icon-mobile" />}
          </span>
          <span
            className={`page-stepper_steps-step3 ${page >= 2 && "active-step"}  ${page === 2 && "current-step"}`}
          >
            {page > 2 ? <FaCheck className="check-icon-mobile" /> : <VscCircleFilled className="check-icon-mobile" />}
          </span>
          <span
            className={`page-stepper_steps-step4 ${page >= 3 && "active-step"}  ${page === 3 && "current-step"}`}
          >
            {page > 3 ? <FaCheck className="check-icon-mobile" /> : <VscCircleFilled className="check-icon-mobile" />}
          </span>
          <div className="page-stepper_steps-progress">
            <div
              className={`page-stepper_steps-progress_indicator ${
                page === 1
                  ? "step2"
                  : page === 2
                  ? "step3"
                  : page === 3
                  ? "step4"
                  : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
