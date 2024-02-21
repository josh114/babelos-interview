import React, { useState } from "react";
import useUserContext from "../hooks/useUserContext";

const Personal = () => {
  const { data, handleChange } = useUserContext();
  const [msg, setMsg] = useState("Must be at least 8 characters");

  // function validatePassword(password) {
  //   const regex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=\[\]{};':"\\|,.<>/?])[A-Za-z0-9!@#$%^&*()_-+=\[\]{};':"\\|,.<>/?]{8,}$/;

  //   return regex.test(password);
  // }

  const ageRange = () => {
    const options = [];
    for (let i = 18; i <= 40; i++) {
      options.push(i);
    }
    return options;
  };
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
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  value={data.first_name}
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
                  name="last_name"
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
                    name="phone_number"
                    id="phone_number"
                  ></select>
                  <input
                    className="form-input"
                    id="number"
                    name="phone_number"
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
                  name="age"
                  id="age"
                  onChange={handleChange}
                >
                  <option value="">Select age</option>
                  {ageRange().map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
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
                      value={"male"}
                      onChange={handleChange}
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
                      value={"female"}
                      onChange={handleChange}
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
                  name="address"
                  onChange={handleChange}
                  placeholder="Address"
                  required
                />
              </div>
            </div>

            <div className="form-site">
              <div className="form-group">
                <label htmlFor="site">Site*</label>
                <select
                  className="form-select"
                  name="site"
                  id="site"
                  onChange={handleChange}
                >
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
                  name="id-type"
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
                  name="id_number"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-document">
              <div className="form-group">
                <label className="form-label" htmlFor="id_image"></label>
                <input className="form-input" id="id_image" type="file" />
              </div>
            </div>

            <div className="form-password">
              <div className="form-group">
                <label htmlFor="password">Create Password</label>
                <input className="form-input" id="password" type="password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  className="form-input"
                  id="confirm_password"
                  type="password"
                />
              </div>
              <div className="form-password_note">
                <p>{msg}</p>
                <p>Must contain one special character</p>
              </div>
            </div>

            <div>
              <div className="form-group">
                <input type="file" className="form-input" />
              </div>
              <div>
                <p>PNG or JPG (max. 5MB)</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Personal;
