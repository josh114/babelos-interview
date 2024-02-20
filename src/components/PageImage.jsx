import React from "react";

const PageImage = ({ image }) => {
  return (
    <div className="page-image">
      <img src={image} alt="personal information image" />
    </div>
  );
};

export default PageImage;
