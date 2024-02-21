import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";

const Farm = () => {
  const crops = [
    "Corn",
    "Rice",
    "Wheat",
    "Sugar Beet",
    "Cotton",
    "Sugarcane",
    "Cashew",
    "Mango",
    "Vegetables",
    "Coconut",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="farm form">
      <div className="farm-content">
        <div className="farm-content_title">
          <h3>Farm Registration</h3>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="farm_name">
            Farm Name*
          </label>
          <input className="form-input" id="farm_name" type="text" required />
        </div>

        <div className="form-group_coordinates">
          <label htmlFor=""></label>
          <div className="form-group_coordinates-item">
            <div className="form-group">
              <input
                className="form-input crops-input"
                type="text"
                id="farm_longitude"
                placeholder="Longitude"
              />
            </div>
            <div className="form-group">
              <input
                className="form-input crops-input"
                type="text"
                id="farm_latitude"
                placeholder="Latitude"
              />
            </div>
          </div>
          <p>Ex: Longitude: 8.6753&deg; E. Latitude: 9.0820&deg; N</p>
        </div>

        <div className="crops">
          <div className="crops-title">
            <p>Crops cultivated and planting season</p>
          </div>

          <div className="form-group_crops">
            <div className="form-group">
              <label className="form-label" htmlFor="crop_name">
                What crop do you cultivate on this farm?
              </label>
              <select className="form-select" name="crop_name" id="crop_name">
                {crops.map((crop) => (
                  <option value="crop" key={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            <div className="crops-season">
              <div className="form-group">
                <label className="form-label" htmlFor="start_date">
                  Start Date
                </label>
                <select
                  className="form-select"
                  name="start_date"
                  id="start_date"
                >
                  {months.map((month) => (
                    <option value="month" key={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="end_date">
                  End Date
                </label>
                <select className="form-select" name="end_date" id="end_date">
                  {months.reverse().map((month) => (
                    <option value="month" key={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="farm-crop_add">
          <div></div>
          <div className="farm-crop_add-item">
            <button className="button farm-crop_button">
              <div className="button-icon">
                <IoMdAdd className="button-icon_icon" />
                <p>Add another crop</p>
              </div>
            </button>
          </div>
        </div>

        <div className="farm-documents">
          <div>
            <p>Upload farm documents</p>
          </div>
          <div className="farm-documents_form">
            <label htmlFor="upload">
              <div className="farm-documents_form-item">
                <div className="farm-documents_form-item-icon">
                  <FiUploadCloud className="farm-documents_icon" />
                </div>
                <input
                  type="file"
                  id="upload"
                  className="farm-documents_input"
                />
                <div className="farm-documents_input-text-container">
                  <p className="farm-documents_input-text">
                    Click to upload <span>or drag and drop</span>
                  </p>
                  <p>PNG, JPG or PDF (max. 10MB)</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farm;
