import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Crops = ({ handleData }) => {
  const crops = ["Onion", "Tomato"];
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [cropId, setCropId] = useState("");

  useEffect(() => {
    if (startDate && endDate && cropId) {
      handleData({
        cropId,
        farmSeasonStart: startDate.toISOString(),
        farmSeasonEnd: endDate.toISOString(),
      });
    }
  }, [startDate, endDate, cropId]);

  return (
    <>
      <div className="form-group_crops">
        <div className="form-group">
          <label className="form-label" htmlFor="crop_name">
            What crop do you cultivate on this farm?
          </label>
          <select
            className="form-select"
            name="cropId"
            id="crop_name"
            onChange={(e) => setCropId(e.target.value)}
          >
            <option value="" style={{ fontFamily: "Inter !important" }}>
              Select crop
            </option>
            <option value="fwc-do3o3xlz">Onion</option>
            <option value="fwc-354bssp7">Tomato</option>
          </select>
        </div>

        <div className="crops-season" style={{ marginBottom: "20px" }}>
          <div className="form-group">
            <label className="form-label" htmlFor="start_date">
              Start Date
            </label>
            <DatePicker
              className="form-input form-input_width"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="end_date">
              End Date
            </label>
            <DatePicker
              className="form-input form-input_width"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Crops;
