import React, { useEffect, useState } from "react";
import { upload } from "../config/upload";
import { uploadUrl } from "../config/url";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadID = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = async (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // upload(file);
      setSelectedFile(file);
    }
    try {
      const fd = new FormData();
      fd.append("file", e.target.files[0]);
      const response = await axios.post(uploadUrl, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast("File uploaded successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      console.log(response.data);
    } catch (error) {
      toast("Error uploading file", {
        position: "top-right",
        autoClose: 5000,
      });
      console.log(error);
    }
  };

  return (
    <div className="form-document">
      <ToastContainer />
      <div className="form-group">
        <p>Upload ID document</p>
        <label className="form-label" htmlFor="id_image">
          <div className="form-document_upload">
            <div className="form-document_upload-preview">
              <p className="form-document_upload-preview_text">Choose file</p>
            </div>
            <p style={{ margin: 0 }}>{selectedFile && selectedFile.name}</p>
          </div>
        </label>
        <input
          id="id_image"
          type="file"
          style={{ display: "none" }}
          onChange={handleFile}
        />
      </div>
    </div>
  );
};

export default UploadID;
