const request = require('request');

const breed = process.argv[2];

const breedFetcher = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) console.log("error: ", error);
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      return console.log("error found, please enter a valid cat breed for search");
    } else {
      console.log(data[0].description);
    }
  
  });
};

breedFetcher(breed);