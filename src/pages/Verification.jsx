import React, { useState } from "react";
import PageImage from "../components/PageImage";
import verify from "../assets/verify.png";
import SmallScreenTopBar from "../components/SmallScreenTopBar";
import TopBar from "../components/Topbar";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Verification = () => {
  const [showVerification, setShowVerification] = useState(true);
  const navigate = useNavigate();
  const [success, showSuccess] = useState(false);
  const [pending, showPending] = useState(false);
  return (
    <div className="page">
      <div className="page-right">
        <div className="page-right_content">
          <SmallScreenTopBar />
          {showVerification && (
            <div className="page-right_content-main">
              <div className="page-right_content-main_warning">
                <button>
                  <RiErrorWarningLine size={25} />
                </button>
              </div>
              <div className="page-right_content-main_text">
                <h1>Verification required</h1>
                <p>A 5 digit verification code has been sent to</p>
                <b>+234809944989</b>
                <h5>Enter verification code</h5>
              </div>
              <div className="page-right_content-main_input">
                <input name="code" className="code-input" required />
                <input name="code" className="code-input" required />
                <input name="code" className="code-input" required />
                <input name="code" className="code-input" required />
                <input name="code" className="code-input" required />
              </div>
              <div className="page-right_content-main_submit">
                <button type="submit">Continue</button>
              </div>
              <div className="page-right_content-main_resend">
                <p>
                  Didn't receive the code?{" "}
                  <span>
                    Resend in <b>01:59</b>
                  </span>
                </p>
              </div>
            </div>
          )}
          {success && (
            <div className="page-right_content-main">
              <div className="page-right_content-main_success">
                <button>
                  <FaRegCircleCheck color="#0d8a6a" size={25} />
                </button>
              </div>
              <div className="page-right_content-main_text">
                <h1>Verification successful</h1>
                <p>
                  Your account has been verified, you can now <br />
                  proceed to your dashboard
                </p>
              </div>
              <div className="page-right_content-main_submit">
                <button type="submit" onClick={() => navigate("/dashboard")}>
                  Go to your Dashboard
                </button>
              </div>
              <div className="page-right_content-main_text">
                <p>
                  You can explore different products in SWH
                  <br /> Marketplace.
                </p>
              </div>
              <div className="page-right_content-main_marketplace">
                <button type="submit">Go to Marketplace</button>
              </div>
            </div>
          )}

          {pending && (
            <div className="page-right_content-main">
              <div className="page-right_content-main_pending">
                <button>
                  <RiErrorWarningLine color="#f89718" size={25} />
                </button>
              </div>
              <div className="page-right_content-main_text">
                <h1>Approval pending</h1>
                <p>
                  You will gain full access to dashboard upon successful
                  Approval
                </p>
              </div>
              <div className="page-right_content-main_submit">
                <button type="submit">Go to Marketplace</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;
