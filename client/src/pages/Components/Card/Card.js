import React from 'react'
import { Link } from "react-router-dom"
import "../Card/Card.css"


function Card(props) {
    const { src, thumbnail, mediaType, date, alt } = props;

    const imageSrc =

        <div className="card h-100">

            {mediaType === "image" ?

                <img src={src} className="card-img" alt={alt} />

                :

                <img src={thumbnail} className="card-img" alt={alt} />

            }

            <div className="card-img-overlay">
                <p className=" card-img-overlay card-text ">{date}</p>
            </div>


            {/* having trouble with https://solarsystem.nasa.gov/gltf_embed/2381/ */}

        </div>

    return (
        <div className="col" >
            <Link to="/imageDetails">
                {imageSrc}
            </Link>

        </div>

    );
}

export default Card;