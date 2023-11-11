import React from "react";
import "./travelblog.css";

const TravelBlog = (props) => {
  return (
    <div className="travel-wrapper pt-2 bg-light text-dark">
      <h1>{props.placeHeading}</h1>
      <div className="img-wrapper my-4">
        <img
          src={props.placeImg1}
          alt=""
          className="travel-image border rounded-3 border-dark border-3"
        />
        <img
          src={props.placeImg2}
          alt=""
          className="travel-image border rounded-3 border-dark border-3"
        />
        <img
          src={props.placeImg3}
          alt=""
          className="travel-image border rounded-3 border-dark border-3"
        />
      </div>
      <p className="desc-wrapper mb-5 w-75 d-inline-flex text-dark font-weight-bolder">
        {props.placeDescription}
      </p>
    </div>
  );
};

export default TravelBlog;
