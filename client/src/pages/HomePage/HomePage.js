import React from 'react'
import {Link} from "react-router-dom"
function HomePage() {
    return (
        <div>
            <h1>All 16 Apod images</h1>
            <Link to="/imageDetails">
            <h1>Image Details Here</h1>
            </Link>
        </div>

    );
}

export default HomePage;