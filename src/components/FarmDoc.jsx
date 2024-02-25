import React, { useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { FiUploadCloud } from "react-icons/fi";
import { uploadUrl } from "../config/url";
import { RiDeleteBinLine } from "react-icons/ri";

const FarmDoc = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const handleUpload = async (e) => {
    try {
      setFile(e.target.files[0]);
      const fd = new FormData();
      fd.append("file", file);
      setProgress((prevState) => {
        return { ...prevState, started: true };
      });
      //   axios
      //     .post(uploadUrl, fd, {
      //       onUploadProgress: (ProgressEvent) => {
      //         setProgress((prevState) => {
      //           return { ...prevState, pc: ProgressEvent.progress * 100 };
      //         });
      //         // console.log(ProgressEvent.progress * 100);
      //       },
      //       headers: {
      //         "Custom-Header": "value",
      //       },
      //     })
      //     .then((res) => {
      //       // console.log(res.data);
      //       setFile(null);
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //     });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="farm-documents_form">
        <label htmlFor="upload">
          <div className="farm-documents_form-item">
            <div className="farm-documents_form-item-icon">
              <FiUploadCloud className="farm-documents_icon" />
            </div>
            <input type="file" id="upload" className="farm-documents_input" />
            <div className="farm-documents_input-text-container">
              <p className="farm-documents_input-text">
                Click to upload <span>or drag and drop</span>
              </p>
              <p>PNG, JPG or PDF (max. 10MB)</p>
            </div>
          </div>
        </label>
      </div>
      {/* <div className="progress_container">
        <CiFileOn />

        <div>
          {file && <p>{file.name}</p>}
          {file && <p>{file.size}</p>}
          <progress value={progress.pc} max={"100"}></progress>
        </div>
        <RiDeleteBinLine />
      </div> */}
    </>
  );
};

export default FarmDoc;
