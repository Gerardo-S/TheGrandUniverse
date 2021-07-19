import React from 'react'
import {Link} from "react-router-dom"
function ImageDetails() {
    return (
        <div>
            <h1>Image Details Here</h1>
            <Link to="/apodImages">
            <h2>Go back button here</h2>
            
            </Link>

        </div>
    );
}

export default ImageDetails;