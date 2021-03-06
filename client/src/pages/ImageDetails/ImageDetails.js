import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import "../../pages/ImageDetails/ImageDetails.css";
import { makeAPODUrl } from "../../util/API/API";
import Spinner from "../Components/Spinner/Spinner";
import Nav from "../Components/Nav/Nav";
function ImageDetails() {
  const params = useParams();
  const { date } = params;
  const { data, error } = useSWR(makeAPODUrl({ date }));

  return (
    <div className="bg-dark imageDetailsBackground ">
      <Nav
        navText={"Return to APOD"}
        alignText={"justify-content-center"}
        imageDetailsPageCondition={false}
      />

      <div
        className="container navBoarderColor text-white  pt-5  pr-2 pl-2
                mw-100"
      >
        {error && <p>Error:{error}</p>}
        {!data && (
          <main className="imgContainerDetailsPage  mx-auto  m-3">
            <Spinner />
          </main>
        )}
        {data && (
          <>
            <h1 className="text-center">{data.title}</h1>
            <h5 className="mt-3 mb-2lead text-center">{data.date}</h5>
            <main className="imgContainerDetailsPage  mx-auto  m-3">
              <img src={data.hdurl} alt={data.alt} />
            </main>
            <p className="text-center">copyright: {data.copyright}</p>
            <section className="explanationSection">
              <p className="lead text-wrap">{data.explanation}</p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageDetails;
