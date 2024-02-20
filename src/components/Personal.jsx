import React from "react";

const Personal = () => {
  const ageRange = () => {
    const options = [];
    for (let i = 18; i <= 40; i++) {
      options.push(<option value={i}>{i}</option>);
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
                <label className="form-label" for="first_name">
                  First Name*
                </label>
                <input
                  className="form-input"
                  id="first_name"
                  type="text"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" for="last_name">
                  Last Name*
                </label>
                <input
                  className="form-input"
                  id="last_name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="form-phone">
              <div className="form-group">
                <label className="form-label" for="number">
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
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-email">
              <div className="form-group">
                <label className="form-label" for="email">
                  Email <span className="form-label_italic">(Optional)</span>
                </label>
                <input className="form-input" id="email" type="email" />
              </div>
            </div>

            <div className="form-age-gender">
              <div className="form-group">
                <label className="form-label" for="age">
                  Age*
                </label>
                <select className="form-select" name="age" id="age">
                  <option value="">Select age</option>
                  {ageRange().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.props.children}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" for="gender">
                  Choose Gender*
                </label>

                <div className="form-group_radio">
                  <div className="form-group_radio-item">
                    <input
                      className="form-radio"
                      type="radio"
                      name="gender"
                      id="male"
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
                <label className="form-label" for="address">
                  Residential Address*
                </label>
                <input className="form-input" id="address" type="text" />
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
                <select className="form-select" name="id-type" id="id-type">
                  <option value="national">National ID card (NIN)</option>
                  <option value="voter">Voter's Card</option>
                  <option value="passport">International Passport</option>
                </select>
              </div>
            </div>

            <div className="form-id_number">
              <div className="form-group">
                <label className="form-label" for="id_number">
                  ID Number*
                </label>
                <input className="form-input" id="id_number" type="text" />
              </div>
            </div>

            <div className="form-document">
              <div className="form-group">
                <label className="form-label" for="id_image"></label>
                <input className="form-input" id="id_image" type="file" />
              </div>
            </div>

            <div className="form-password">
              <div className="form-group">
                <label htmlFor="password">Create Passwor</label>
                <input className="form-input" id="password" type="password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Create Passwor</label>
                <input
                  className="form-input"
                  id="confirm_password"
                  type="password"
                />
              </div>
              <div className="form-password_note">
                <p>Must be at least 8 characters</p>
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
