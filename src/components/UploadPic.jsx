import React, { useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import { uploadUrl, downloadUrl } from "../config/url";
import useUserContext from "../hooks/useUserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadPic = () => {
  const [image, setImage] = useState("");
  const { data, setData } = useUserContext();

  const onUpload = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    try {
      const fd = new FormData();
      fd.append("file", e.target.files[0]);
      const response = await axios.post(uploadUrl, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setData((prevData) => ({
        ...prevData,
        profilePic: {
          ...prevData.profilePic,
          url: downloadUrl + response.data.url,
        },
      }));
      console.log(data);
    } catch (error) {
      toast.error("error occured while uploading profile pic");
      console.log(error);
    }
  };

  return (
    <div className="upload">
      <ToastContainer />
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
