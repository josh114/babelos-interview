import React, { useState, useRef } from "react";
import { useAddUserVerificationMutation } from "../features/userSlice";

const VerificationInputs = ({ data }) => {
  const [addUserVerification] = useAddUserVerificationMutation();
  const handleSubmit = async () => {
    try {
      const verificationCode = codes.join("");
      const body = {
        credential: data.credential,
        code: verificationCode,
      };
      const response = await addUserVerification(body);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [codes, setCodes] = useState(Array(5).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !codes[index]) {
      inputRefs.current[index - 1].focus();
    }
  };
  console.log(codes.every(Boolean));
  return (
    <>
      <div className="page-right_content-main_input">
        {codes.map((code, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            className="code-input"
            maxLength={1}
            value={code}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      <div className="page-right_content-main_submit">
        <button
          type="submit"
          disabled={!codes.every(Boolean)}
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default VerificationInputs;
