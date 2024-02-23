import React, { useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const UploadPic = () => {
  const [image, setImage] = useState("");

  const onUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="upload">
      <p className="upload-text">
        Upload Profile Picture <span>(Optional)</span>
      </p>
      <div className="input-wrapper">
        <div className="image-preview">
          {image === "" ? (
            <FiUser className="user-icon" />
          ) : (
            <img className="image-preview" src={image} alt="image preview" />
          )}
        </div>
        <label className="image-input">
          <HiOutlineUpload className="upload-icon" />
          Upload picture
          <input
            type="file"
            name="image"
            id="image"
            onChange={onUpload}
            accept="image/png, image/jpeg"
          />
        </label>
      </div>
      <p className="upload-subtext">
        PNG or JPG <span>(max. 5MB)</span>
      </p>
    </div>
  );
};

export default UploadPic;
