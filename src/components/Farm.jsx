import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import FarmSlider from "./FarmSlider";
import Crops from "./Crops";
import FarmAddedModal from "./FarmAddedModal";
import { set } from "date-fns";
import useUserContext from "../hooks/useUserContext";

const Farm = () => {
  const { handleFarm, page, setPage, farmHide } = useUserContext();
  const handleCropData = (data) => {
    setCropData(data);
  };
  const handlePrev = () => setPage((prev) => prev - 1);
  const handleSubmit = () => {
    handleFarm(farmData);
    setshowFarmAddedModal(true);
  };
  const [crops, setCrops] = useState([
    <Crops key={0} handleData={handleCropData} />,
  ]);
  const [showfarmAddedModal, setshowFarmAddedModal] = useState(false);
  const [farmName, setFarmName] = useState("");
  const [farmlat, setFarmLat] = useState("");
  const [farmlong, setFarmLong] = useState("");
  const [cropData, setCropData] = useState({});

  const handleAddCrop = (e) => {
    e.preventDefault();
    setCrops([
      ...crops,
      <Crops key={crops.length} handleData={handleCropData} />,
    ]);
  };

  const farmData = {
    name: farmName,
    lat: farmlat,
    address: "Apakjo",
    long: farmlong,
    crops: [cropData],
    docUploads: [
      {
        url: "https://",
      },
      {
        url: "https://",
      },
    ],
  };
  let dis;
  const hideButton = {
    display: "none",
  };
  const showButton = {
    display: "block",
  };
  farmHide ? (dis = hideButton) : (dis = showButton);

  // console.log(farmData);
  return (
    <div className="farm form padding">
      <div className="farm-content">
        <div className="farm-content_title">
          <h3>Farm Registration</h3>
        </div>
        {/* <FarmSlider /> */}
        <div className="form-group">
          <label className="form-label" htmlFor="farm_name">
            Farm Name*
          </label>
          <input
            className="form-input"
            id="farmName"
            type="text"
            required
            onChange={(e) => setFarmName(e.target.value)}
          />
        </div>

        <div className="form-group_coordinates" style={{ marginTop: "20px" }}>
          <label htmlFor=""> Farm Coordinates*</label>
          <div className="form-group_coordinates-item">
            <div className="form-group">
              <input
                className="form-input crops-input"
                type="text"
                id="farm_longitude"
                placeholder="Longitude"
                onChange={(e) => setFarmLong(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-input crops-input"
                type="text"
                id="farm_latitude"
                placeholder="Latitude"
                onChange={(e) => setFarmLat(e.target.value)}
              />
            </div>
          </div>
          <p>Ex: Longitude: 8.6753&deg; E. Latitude: 9.0820&deg; N</p>
        </div>

        <div className="crops">
          <div className="crops-title">
            <p>Crops cultivated and planting season</p>
          </div>
          {crops}
        </div>

        <div className="farm-crop_add">
          <div></div>
          <div className="farm-crop_add-item">
            <button className="button farm-crop_button">
              <div className="button-icon" onClick={handleAddCrop}>
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
        <div className="page-right_button-container">
          <button
            className={`button main_button`}
            onClick={handlePrev}
            style={{ display: page != 3 ? "none" : "block" }}
          >
            Back
          </button>
          <button
            className="button hide green_button main_button"
            onClick={handleSubmit}
            style={dis}
          >
            Add farm
          </button>
        </div>
      </div>
      {showfarmAddedModal && <FarmAddedModal setShow={setshowFarmAddedModal} />}
    </div>
  );
};

export default Farm;
