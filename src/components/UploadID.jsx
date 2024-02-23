import React, { useEffect, useState } from "react";
import { upload } from "../config/upload";

const UploadID = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = async (e) => {
    if ((e.target.files)) {
      const file = (e.target.files[0]);
      upload(file)
      
    }

  };

  return (
    <div className="form-document">
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
