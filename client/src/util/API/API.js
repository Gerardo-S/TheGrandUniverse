import axios from "axios";


function fetchApodImages(){
    return axios.get("/api/getApodImages")
};

export {fetchApodImages};