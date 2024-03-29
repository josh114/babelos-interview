import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";
import { IoIosDocument } from "react-icons/io";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import useUserContext from "../hooks/useUserContext";

const FarmSlider = () => {
  const [activeFarm, setActiveFarm] = useState(1);
  const { data } = useUserContext();
  const handleCropName = (cropId) => {
    let name;
    if (cropId === "fwc-do3o3xlz") {
      name = "Onion";
    } else {
      name = "Tomato";
    }
    return name;
  };

  function handlePrev() {
    if (activeFarm > 1) {
      setActiveFarm(activeFarm - 1);
    }
  }

  const handleNext = () => {
    if (activeFarm < farms.length) {
      setActiveFarm(activeFarm + 1);
    }
  };
  const farms = data.farmDetails;
  useEffect(() => {
    console.log(farms);
  }, [farms]);

  return (
    <>
      <div className="farm-slider">
        {farms.length > 0
          ? farms.map((farm, index) => {
              if (index + 1 === activeFarm)
                return (
                  <div className="farm-card" key={index}>
                    <div className="farm-card_header">
                      <div className="farm-card_header-title">
                        <h3>Farm {index + 1}</h3>
                      </div>
                      <div className="farm-card_header-buttons">
                        <span>
                          <CiEdit size={17} color="#714a39" />
                        </span>{" "}
                        <span>
                          <MdOutlineDeleteForever color="#714a39" size={17} />
                        </span>
                      </div>
                    </div>
                    <div className="farm-card_body">
                      <div className="farm-card_body-details">
                        <div className="farm-card_body-details_holder">
                          <div className="farm-card_body-details_holder-icon">
                            <TbListDetails color="#bfc3c9" />
                          </div>
                          <div className="farm-card_body-details_holder-text">
                            <p className="farm-card_body-details_holder-text_caption">
                              Farm name
                            </p>
                            <p className="farm-card_body-details_holder-text_name">
                              {farm.name}
                            </p>
                          </div>
                        </div>
                        <div className="farm-card_body-details_holder">
                          <div className="farm-card_body-details_holder-icon">
                            <TbWorldLongitude color="#bfc3c9" />
                          </div>
                          <div className="farm-card_body-details_holder-text">
                            <p className="farm-card_body-details_holder-text_caption">
                              Longitude
                            </p>
                            <p className="farm-card_body-details_holder-text_longitude">
                              {farm.long}
                            </p>
                          </div>
                        </div>
                        <div className="farm-card_body-details_holder">
                          <div className="farm-card_body-details_holder-icon">
                            <TbWorldLatitude color="#bfc3c9" />
                          </div>
                          <div className="farm-card_body-details_holder-text">
                            <p className="farm-card_body-details_holder-text_caption">
                              Latitude
                            </p>
                            <p className="farm-card_body-details_holder-text_latitude">
                              {farm.lat}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="farm-card_footer">
                      <div className="farm-card_footer-details">
                        <div className="farm-card_footer-details_crops">
                          <div className="farm-card_footer-details_crops-icon">
                            <TbListDetails color="#bfc3c9" />
                          </div>
                          <div className="farm-card_footer-details_crops-text">
                            <p className="farm-card_footer-details_crops-text_caption">
                              Crops produced
                            </p>
                            <p className="farm-card_footer-details_crops-text_content">
                              {farm.crops.map((crop, index) => {
                                return (
                                  <button
                                    key={index}
                                    className="farm-card_footer-details_crops-text_content-button"
                                  >
                                    {handleCropName(crop.cropId)}
                                  </button>
                                );
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="farm-card_footer-details_documents">
                          <div className="farm-card_footer-details_documents-icon">
                            <IoIosDocument color="#bfc3c9" />
                          </div>
                          <div className="farm-card_footer-details_documents-text">
                            <p className="farm-card_footer-details_documents-text_caption">
                              document(s)
                            </p>
                            {farm.docUploads.map((document, index) => {
                              return (
                                <span
                                  key={index}
                                  className="farm-card_footer-details_documents-text_content"
                                >
                                  <a href={document.url} target="_blank">
                                    <BsFileEarmarkPdfFill
                                      color="#d92f22"
                                      size={17}
                                    />
                                  </a>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })
          : ""}
        {farms.length > 0 && (
          <div className="farm-slider_controls">
            <div
              onClick={() => handlePrev()}
              className="farm-slider_controls-prev"
            >
              <GrFormPrevious color="#636c79" />
            </div>
            <div className="farm-slider_controls-indicators">
              {farms.map((farm, index) => {
                return (
                  <span
                    key={index}
                    className={
                      index + 1 === activeFarm
                        ? "farm-slider_controls-indicators_active"
                        : "farm-slider_controls-indicators_inactive"
                    }
                  ></span>
                );
              })}
            </div>
            <div
              onClick={() => handleNext()}
              className="farm-slider_controls-next"
            >
              <GrFormNext color="#636c79" />
            </div>
          </div>
        )}
      </div>
      <div className="new-farmcaption">
        <div className="new-farmcaption_left"></div>
        <div className="new-farmcaption_center">Farm {farms.length + 1}</div>
        <div className="new-farmcaption_right"></div>
      </div>
    </>
  );
};

export default FarmSlider;
