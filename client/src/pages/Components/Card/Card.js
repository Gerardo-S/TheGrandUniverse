import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css";

function Card(props) {
  const { id, src, thumbnail, mediaType, date, alt, copyright, details } =
    props;

  const imageSrc = (
    <div className="card h-100">
      <img
        id={id}
        src={mediaType === "image" ? src : thumbnail}
        className="card-img"
        alt={alt}
        data-image-copyright={copyright}
        data-image-details={details}
        data-image-date={date}
      />

      <div className="card-img-overlay">
        <p className=" card-img-overlay card-text ">{date}</p>
      </div>
    </div>
  );

  return (
    <div className="col ">
      <Link to={`/apod/${date}`}>{imageSrc}</Link>
    </div>
  );
}

export default Card;
