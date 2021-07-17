
// Displays thumbnails of the APODs for the last 16 days (including today) in descending order
// API Key: apiKey
// URL Example: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10


const axios = require("axios");
const fs = require("fs");
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() +1 ;
const year = currentDate.getFullYear();
const today = year+ '-' + month + '-' + day;

const currentDateToCalcPast = new Date ();
const sixteenDaysAgo =  currentDateToCalcPast.getDate() - 16;

currentDateToCalcPast.setDate(sixteenDaysAgo);
const pastSixteenDays = currentDateToCalcPast.toJSON().slice(0,10);


const queryUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=" + `${pastSixteenDays}`+ "&end_date=" +`${today}`;
console.log(queryUrl)
axios.get(queryUrl).then(function (apodResponse){
    const descendingOrder = apodResponse.data.reverse();
    const data = JSON.stringify(descendingOrder);
        fs.writeFile("data.json", data, function(err){
            if (err){
                throw err;
            }
            console.log('Results saved to data.json')
        })
});

