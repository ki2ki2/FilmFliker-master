"use strict";

const api_key = "0a7cf2554cff54bba0989f8152ff25fe";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/**
 * Fetch data from a server using 'url' and passes the result in JSON data to a 'callback' function, along with an optional parameter if has 'optionalParam'.
 */

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
