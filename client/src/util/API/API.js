require("dotenv").config();

const API_KEY = process.env.REACT_APP_APIKEY;

export const makeAPODUrl = (params) => {
  const url = new URL(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=True`
  );
  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });

  return url.toString();
};
