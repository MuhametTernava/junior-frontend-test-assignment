import React from "react";
import Ratio from "react-bootstrap/Ratio";

const Image = ({ source, aspectratio, classList, alt }) => {
  const format = aspectratio ? aspectratio : "16x9";

  return (
    <>
      <Ratio aspectRatio={format} className={classList}>
        <img
          src={source}
          className="object-cover"
          loading="lazy"
          alt={alt}
        />
      </Ratio>
    </>
  );
};

export default Image;
