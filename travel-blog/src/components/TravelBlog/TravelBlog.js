import React from "react";
import "./travelblog.css";

const TravelBlog = (props) => {
  return (
    <div className="travel-wrapper mt-2">
      <h1>{props.placeHeading}</h1>
      <div className="img-wrapper my-4">
        <img src={props.placeImg1} alt="" className="travel-image" />
        <img src={props.placeImg2} alt="" className="travel-image" />
        <img src={props.placeImg3} alt="" className="travel-image" />
      </div>
      <h3 className="desc-wrapper mb-5 w-75 d-inline-flex">
        {props.placeDescription}
      </h3>
    </div>
  );
};

export default TravelBlog;
