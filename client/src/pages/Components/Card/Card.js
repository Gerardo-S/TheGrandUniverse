import React from 'react'
import { Link } from "react-router-dom"
import "../Card/Card.css"


function Card(props) {
    const { src, thumbnail, mediaType, alt } = props;

    const imageSrc =

        <div className="card h-100">

            {mediaType === "image" ?

                <img src={src} className="card-img-top" alt={alt} />
                :

                <img src={thumbnail} className="card-img-top" alt={alt} />

            }

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