import React, { useState, useEffect } from "react";

const VerificationTimer = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(120); // 2 minutes

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    }, 1000);

    return () => clearTimeout(timerId); // Cleanup on unmount
  }, [secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="page-right_content-main_resend">
      <p>
        Didn't receive the code?{" "}
        <span>
          {secondsRemaining > 0 ? (
            <span>
              Resend in <b>{formattedTime}</b>{" "}
            </span>
          ) : (
            <button className="verification-resend_button">
              Click to resend
            </button>
          )}
        </span>
      </p>
    </div>
  );
};

export default VerificationTimer;
