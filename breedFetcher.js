const request = require('request');

//const breedname = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null); //passes the error if there is one, null for description
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("breed not found", null);
    } else {
      callback(null, data[0].description);
    }
  });
};


//breedFetcher(breed);

module.exports = { fetchBreedDescription };