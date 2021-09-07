import React from "react";
import axios from "axios";
import { makeAPODUrl } from "../../util/API/API";
import "../HomePage/HomePage.css";
import Card from "../Components/Card/Card";
import Spinner from "../Components/Spinner/Spinner";
import Nav from "../Components/Nav/Nav";
import useSWR from "swr";
import { format, subDays } from "date-fns";

const endDate = format(new Date(), "yyyy-MM-dd");
const startDate = format(subDays(new Date(), 15), "yyyy-MM-dd");

function HomePage() {
  const fetcher = () =>
    axios
      .get(makeAPODUrl({ start_date: startDate, end_date: endDate }))
      .then((res) => {
        const apodData = res.data.reverse();
        return apodData;
      });

  const { data, error } = useSWR("/api/data", fetcher);

  return (
    <div className="wrapper ">
      <Nav
        navText={"TheGrandUniverse"}
        alignText={"justify-content-center"}
        imageDetailsPageCondition={true}
      />
      <section className="imgContainer">
        <p className="text-white-50">
          Image Copyright(ForestSky): Will GodWard
        </p>
        <main className="titleHeaderAPOD container text-wrap text-break">
          <h1>A.P.O.D.</h1>
          <h2>Astronomy Picture Of The Day</h2>
          <p className="lead">Select an Image Below for More</p>
        </main>
      </section>

      <section className="imgContainerGalaxySky">
        <div className="container cardContainer pb-5 pt-5">
          {error && <p>{error}</p>}
          {!data && <Spinner />}
          {/* {!data && <p> Loading...</p>} */}
          {data && (
            <div className="imgCards ">
              <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2  g-4 ">
                {data.map((images) => (
                  <Card
                    id={images.title}
                    src={images.hdurl}
                    thumbnail={images.thumbnail_url}
                    mediaType={images.media_type}
                    date={images.date}
                    alt={images.title}
                    key={images.title}
                    copyright={images.copyright}
                    details={images.explanation}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
