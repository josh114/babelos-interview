import React, { useState } from "react";
import useUserContext from "../hooks/useUserContext";

import Password from "./Password";
import UploadID from "./UploadID";
import UploadPic from "./UploadPic";

const Personal = () => {
  const { data, handleChange, handleRadio } = useUserContext();

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
                  <select
                    className="form-select"
                    name="credential"
                    id="phone_number"
                  ></select>
                  <input
                    className="form-input"
                    id="number"
                    name="credential"
                    placeholder="81000 0000"
                    onChange={handleChange}
                    type="text"
                    required
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
                  <option value="18-25">18 - 25</option>
                  <option value="26-35">26 - 35</option>
                  <option value="36-45">36 - 45</option>
                  <option value="46-55">46 - 55</option>
                  <option value="56-65">56 - 65</option>
                  <option value="66-75">66 - 75</option>
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
        </div>
      </div>
    </div>
  );
};

export default Personal;
