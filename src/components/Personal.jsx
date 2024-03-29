import React, { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import Password from "./Password";
import UploadID from "./UploadID";
import UploadPic from "./UploadPic";

const Personal = () => {
  const {
    data,
    page,
    handleChange,
    handleRadio,
    handlePhone,
    disableNext,
    continueHide,
    setPage,
    farmHide,
  } = useUserContext();
  const [phone, setPhone] = useState("");
  // console.log(phone);
  const pageData = [
    data.firstName,
    data.lastName,
    data.email,
    data.credential,
    data.password,
    data.ageGroup,
    data.gender,
    data.resAddress,
    data.idUpload.idType,
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
    <div className="main-content">
      <div className="main-content_form">
        <div className="main-content_form-title">
          <h1>Create Account</h1>
          <h5>Personal Information</h5>
        </div>

        <div className="main-content_form-actual">
          <form className="form">
            <div className="form-name">
              <div className="form-group">
                <label className="form-label" htmlFor="first_name">
                  First Name*
                </label>
                <input
                  className="form-input"
                  id="first_name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="last_name">
                  Last Name*
                </label>
                <input
                  className="form-input"
                  id="last_name"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-phone">
              <div className="form-group">
                <label className="form-label" htmlFor="number">
                  Phone Number*
                </label>
                <div className="form-group_number">
                  <PhoneInput
                    className="form-internation_phone"
                    id="number"
                    name="credential"
                    placeholder="8100002320"
                    type="text"
                    required
                    defaultCountry="ng"
                    value={phone}
                    inputStyle={{
                      width: "100%",
                      maxWidth: "600px !important",
                      marginLeft: "10px",
                      borderRadius: "8px",
                      // border: 0,
                    }}
                    style={{
                      onFocus: {
                        borderColor: "#5ebaa2",
                        boxShadow:
                          "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #e7f5f1",
                      },
                    }}
                    onChange={(phone) => {
                      setPhone(phone);
                      handlePhone(phone);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-email">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email <span className="form-label_italic">(Optional)</span>
                </label>
                <input
                  className="form-input"
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="form-age-gender">
              <div className="form-group">
                <label className="form-label" htmlFor="age">
                  Age*
                </label>
                <select
                  className="form-select"
                  name="ageGroup"
                  id="age"
                  onChange={handleChange}
                >
                  <option value="">Select age</option>
                  <option value="18 - 25">18 - 25</option>
                  <option value="26 - 35">26 - 35</option>
                  <option value="36 - 45">36 - 45</option>
                  <option value="46 - 55">46 - 55</option>
                  <option value="56 - 65">56 - 65</option>
                  <option value="66 - 75">66 - 75</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="gender">
                  Choose Gender*
                </label>

                <div className="form-group_radio">
                  <div className="form-group_radio-item">
                    <input
                      className="form-radio"
                      type="radio"
                      name="gender"
                      id="male"
                      defaultValue={"Male"}
                      onChange={handleRadio}
                    />
                    <label className="form-radio-label" id="male">
                      Male
                    </label>
                  </div>

                  <div className="form-group_radio-item">
                    <input
                      className="form-radio"
                      type="radio"
                      id="female"
                      name="gender"
                      defaultValue={"Female"}
                      onChange={handleRadio}
                    />
                    <label className="form-radio-label" id="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-address">
              <div className="form-group">
                <label className="form-label" htmlFor="address">
                  Residential Address*
                </label>
                <input
                  className="form-input"
                  id="address"
                  type="text"
                  name="resAddress"
                  onChange={handleChange}
                  placeholder="Address"
                  required
                />
              </div>
            </div>

            <div className="form-site">
              <div className="form-group">
                <label htmlFor="site">Site*</label>
                <select className="form-select" name="site" id="site">
                  <option value="ajegunle">Ajegunle</option>
                  <option value="apo">Apo</option>
                  <option value="rumukrusi">Rumukrusi</option>
                </select>
              </div>
            </div>

            <div className="form-id">
              <div className="form-group">
                <label htmlFor="id-type">ID Type*</label>
                <select
                  className="form-select"
                  name="idType"
                  id="id-type"
                  onChange={handleChange}
                >
                  <option value="national">National ID card (NIN)</option>
                  <option value="voter">Voter's Card</option>
                  <option value="passport">International Passport</option>
                </select>
              </div>
            </div>

            <div className="form-id_number">
              <div className="form-group">
                <label className="form-label" htmlFor="id_number">
                  ID Number*
                </label>
                <input
                  className="form-input"
                  id="id_number"
                  name="idNumber"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <UploadID />
            <Password />

            <UploadPic />
          </form>
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
      </div>
    </div>
  );
};

export default Personal;
