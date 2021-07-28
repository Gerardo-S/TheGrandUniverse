import axios from "axios";


function fetchApodImages(){
    return axios.get("/api/apodImages")
};

function saveApod (apod) {
    return axios.post("/api/apodImages", apod)
}

function fetchSavedApod () {
    return axios.get("/api/SavedapodImages")
}
export {fetchApodImages, saveApod, fetchSavedApod};