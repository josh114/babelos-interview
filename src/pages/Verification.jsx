import React, { useEffect, useState } from "react";
import PageImage from "../components/PageImage";
import verify from "../assets/verify.png";
import SmallScreenTopBar from "../components/SmallScreenTopBar";
import TopBar from "../components/Topbar";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { selectCurrentUser } from "../features/auth/authSlice";
import VerificationTimer from "../components/VerificationTimer";
import { useSelector } from "react-redux";
import VerificationInputs from "../components/VerificationInputs";
import { useAddVerificationCodeMutation } from "../features/userSlice";

const Verification = () => {
  const [showVerification, setShowVerification] = useState(true);
  const navigate = useNavigate();
  const [addVerificationCode] = useAddVerificationCodeMutation();
  const handleGetCode = async (credential) => {
    try {
      const body = {
        credential: credential,
      };
      const response = await addVerificationCode(body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const userData = useSelector(selectCurrentUser);
  // console.log("this is user data", userData);
  let credential;
  if (userData) {
    credential = userData.credential;
  } else {
    credential = "no user found";
  }
  useEffect(() => {
    if (userData) {
      if (userData?.error) {
        if (userData.message === "This credential is not verified.") {
          (async function () {
            await handleGetCode(userData.credential);
          })();
        } else {
          navigate("/");
        }
      }
      if (userData?.isMobileVerified || userData?.isEmailVerified) {
        if (userData.isApproved) {
          setSuccess(true);
        } else {
          setShowVerification(false);
          setPending(true);
        }
      }
    }
  }, [userData]);

  return (
    <div className="page">
      <div className="page-right">
        <div className="page-right_content">
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
                <b>{credential}</b>
                <h5>Enter verification code</h5>
              </div>
              <VerificationInputs
                credential={userData ? userData.credential : ""}
              />

              <VerificationTimer />
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
