import React, { useEffect, useState } from 'react'
import { fetchApodImages } from "../../util/API/API";
import "../HomePage/HomePage.css"
import Card from "../Components/Card/Card"
import ForestWindow from "../../util/images/ForestWindow.jpg"
import Flower from "../../util/images/Flower.png"
import Sky from "../../util/images/Sky.jpg"
function HomePage() {

    const [apodImages, setApodImagess] = useState([]);
    useEffect(() => {
        fetchApodImages().then(({ data }) => {
            setApodImagess(data)
        });
    }, []);


return (
    <div className="wrapper">

        <section className="imgContainer">
            <nav className="navbar navbar-dark bg-dark d-flex ">
                <div className="container-fluid navItems justify-content-center">
                    <span className="navbar-brand d-flex">
                        <img
                            src={Flower}
                            alt="Flower"
                            width="53"
                            height="50"
                            className="d-inline-block " />
                        <h2 className="universeText">
                            TheGrandUniverse
                        </h2>

                    </span>
                </div>
            </nav>
            <img
                className="imgTreeBackGround img-fluid"
                src={ForestWindow}
                alt="Forest-Sky"
            />
            <main className="titleHeaderAPOD container text-wrap text-break">
                <h1 >
                    APOD
                </h1>
                <p className="lead">
                    Select an Image Below for More
                </p>
            </main>

        </section>
        <section className="imgContainerApi" style={{ zIndex: "2" }}>
            <div className="blurredBackGround"></div>
            <div className="imgCards">
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 ">
                    {apodImages.map((images) => (
        
                        <Card
                            src={images.urlImage}
                            thumbnail={images.thumbnail}
                            mediaType={images.media_type}
                            alt={images.title}
                            key={images.title}
                        />

                    ))}
                </div>
            </div>
        </section>
        <section className="imgContainerGalaxySky">
            <img id="GalaxySky"
                src={Sky}
                alt="GalaxySky"
                className="d-inline-block" />

        </section>

    </div>

);
}

export default HomePage;