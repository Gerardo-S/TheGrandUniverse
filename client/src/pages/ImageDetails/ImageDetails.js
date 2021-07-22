import React from 'react'
import { Link } from "react-router-dom"
import "../../pages/ImageDetails/ImageDetails.css"
import ForestWindow from "../../util/images/ForestWindow.jpg"
import Nav from '../Components/Nav/Nav'
function ImageDetails(props) {

    return (
        <div>

        <Nav
        navText= {"Return to APOD"}
        alignText={"justify-content-center"}
        />
        <div className="container imageDetailsContainer bg-dark text-white text-center pt-5 vh-100
        mw-100">
           
            <h1>Image Title</h1>
            <h5 className="mt-3 mb-2lead">Date</h5>
            <main className="imgContainerDetailsPage  mx-auto  m-3">
                
            <img  src={ForestWindow} alt="APOD"/>

            </main>
            <p>Copyright</p>
            <p className="lead">Image Details</p>
            <Link to="/apodImages">
            <h2>Go back button here</h2>
            
            </Link>

        </div>



        </div>
    );
}

export default ImageDetails;