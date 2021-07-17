const axios = require("axios");

function getApodImages(req, res) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const today = year + '-' + month + '-' + day;

    const currentDateToCalcPast = new Date();
    const sixteenDaysAgo = currentDateToCalcPast.getDate() - 16;

    currentDateToCalcPast.setDate(sixteenDaysAgo);
    const pastSixteenDays = currentDateToCalcPast.toJSON().slice(0, 10);

    const queryUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=" + `${pastSixteenDays}` + "&end_date=" + `${today}`;
    axios.get(queryUrl).then((apodResponse) => {
        const descendingOrder = apodResponse.data.reverse();
        const finalData = descendingOrder.map((item) => {
                const { title, url, date, copyright, explanation } = item;
                return {
                    title,
                    urlImage: url,
                    date,
                    copyright,
                    explanation
                };
            })
        res.json(finalData);
    }).catch(err =>{
        console.log(err)
        res.status(500).end();
    });

}

module.exports = { getApodImages };