import React, { useState } from "react";
import useUserContext from "../hooks/useUserContext";

const Bank = () => {
  const {
    data,
    handleChange,
    handleRadio,
    handleBank,
    continueHide,
    setPage,
    farmHide,
    page,
  } = useUserContext();
  const [check, setCheck] = useState(false);
  const activeStyle = {
    display: check ? "block" : "none",
  };
  const pageData = [data.hasSmartPhone];

  const banks = [
    "Access Bank Plc",
    "Fidelity Bank Plc",
    "First City Monument Bank Limited",
    "First Bank of Nigeria Limited",
    "Guaranty Trust Holding Company Plc",
    "Union Bank of Nigeria Plc",
    "United Bank for Africa Plc",
    "Zenith Bank Plc",
  ];
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
    <div className="form">
      <div className="bank-title">
        <h5>Bank Details</h5>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="bank_name">
          Do you have a Smartphone?
        </label>
        <div className="form-group_radio">
          <div className="form-group_radio-item">
            <input
              className="form-radio"
              type="radio"
              name="hasSmartPhone"
              id="smartphone_yes"
              defaultValue={"yes"}
              onChange={handleRadio}
            />
            <label className="form-radio-label" id="smartphone_yes">
              Yes
            </label>
          </div>

          <div className="form-group_radio-item">
            <input
              className="form-radio"
              type="radio"
              id="smartphone_no"
              name="hasSmartPhone"
              defaultValue={"no"}
              onChange={handleRadio}
            />
            <label className="form-radio-label" id="smartphone_no">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="bank_name">
          Do you have a Bank Account?
        </label>
        <div className="form-group_radio">
          <div className="form-group_radio-item">
            <input
              className="form-radio"
              type="radio"
              name="hasBankAccount"
              id="bankaccount_yes"
              defaultValue={"yes"}
              // checked={data.bankaccount}
              onChange={(e) => {
                setCheck(e.target.checked);
                handleRadio(e);
              }}
            />
            <label className="form-radio-label" id="bankaccount_yes">
              Yes
            </label>
          </div>

          <div className="form-group_radio-item">
            <input
              className="form-radio"
              type="radio"
              id="bankaccount_no"
              name="hasBankAccount"
              defaultValue={"no"}
              onChange={(e) => {
                setCheck(!e.target.checked);
                handleRadio(e);
              }}
            />
            <label className="form-radio-label" id="bankaccount_no">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="bank_details" style={activeStyle}>
        <div className="form-group">
          <label className="form-label" htmlFor="bank_name">
            Bank Name*
          </label>
          <select
            className="form-select"
            name="bankName"
            id="bank-name"
            onChange={handleBank}
          >
            <option>Select bank</option>
            {banks.map((bank) => (
              <option value={bank} key={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        <div className="form-address">
          <div className="form-group">
            <label className="form-label" htmlFor="account_number">
              Personal Bank Account Number*
            </label>
            <input
              className="form-input"
              name="accountNumber"
              id="account_number"
              type="text"
              onChange={handleBank}
            />
          </div>
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

export default Bank;
