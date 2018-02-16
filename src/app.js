const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const rp = require('request-promise');
const config = require('../config.js');

const app = express();
const PORT = config.port;
const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;
const GMAPS_KEY = config.gmaps.apikey;
const URI_TEXT_SEARCH = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';

app.get('/place', (req, res) => {
  const query = req.query.query
  const url = URI_TEXT_SEARCH + query + '&key=' + GMAPS_KEY;
  console.log(URI_TEXT_SEARCH);
  fetch(url)
    .then(place => place.json())
    .then(place => {
      console.log(place);
      res.status(STATUS_SUCCESS);
      res.send(place);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR);
      res.send({ err: err });
    });
})

app.get('/places', (req, res) => {
  const query = req.query.query
  const url = URI_TEXT_SEARCH + query + '&key=' + GMAPS_KEY;
  console.log(URI_TEXT_SEARCH);
  fetch(url)
    .then(place => place.json())
    .then(place => {
      console.log(place);
      res.status(STATUS_SUCCESS);
      res.send(place);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR);
      res.send({ err: err });
    });
})


app.listen(PORT, err => {
  if (err) {
    console.log(`error starting server: ${err}`)
  } else {
    console.log(`app listening on port ${PORT}`);
  }
});

