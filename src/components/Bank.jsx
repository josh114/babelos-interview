import React from "react";

const Bank = () => {
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
  return (
    <div className="form">
      <div className="bank-title">
        <h5>Bank Details</h5>
      </div>
      <div className="form-group">
        <label className="form-label" for="bank_name">
          Do you have a Smartphone?
        </label>
        <div className="form-group_radio">
          <div className="form-group_radio-item">
            <input
              className="form-radio"
              type="radio"
              name="smartphone"
              id="smartphone_yes"
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
              name="smartphone"
            />
            <label className="form-radio-label" id="smartphone_no">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" for="bank_name">
          Do you have a Bank Account?
        </label>
        <div className="form-group_radio">
          <div className="form-group_radio-item">
            <input
              className="form-radio"
              type="radio"
              name="bankaccount"
              id="bankaccount_yes"
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
              name="bankaccount"
            />
            <label className="form-radio-label" id="bankaccount_no">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" for="bank_name">
          Bank Name*
        </label>
        <select className="form-select" name="bank-name" id="bank-name">
          <option value="" disabled selected>
            Select bank
          </option>
          {banks.map((bank) => (
            <option value={bank} key={bank}>
              {bank}
            </option>
          ))}
        </select>
      </div>

      <div className="form-address">
        <div className="form-group">
          <label className="form-label" for="account_number">
            Personal Bank Account Number*
          </label>
          <input className="form-input" id="account_number" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Bank;
