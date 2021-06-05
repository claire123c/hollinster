const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, '../client/public');
const serveStatic = express.static(filePath);
const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
const APIInfo = require('../config');
const axios = require('axios');
app.use(express.json());
app.use(serveStatic);

// PRODUCT API Calls
app.get('/products', (req, res) => {
  axios({
    url: `${API}/products/`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })

})

app.get('/products/:product_id', (req, res) => {
  axios({
    url: `${API}/products/${req.params.product_id}`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/products/:product_id/related', (req, res) => {
  axios({
    url: `${API}/products/${req.params.product_id}/related`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/products/:product_id/styles', (req, res) => {
  axios({
    url: `${API}/products/${req.params.product_id}/styles`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

// ***********************************************************************
// REVIEW API Calls
app.get('/reviews/:product_id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  axios({
    url: `${API}/reviews?product_id=${req.params.product_id}`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

//Reviews meta goes here
app.get('/reviews/meta/:product_id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  axios({
    url: `${API}/reviews/meta?product_id=${req.params.product_id}`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

// ***********************************************************************
// Q&A API Calls
app.get('/qa/questions/:product_id', (req, res) => {
  axios({
    url: `${API}/qa/questions?product_id=${req.params.product_id}&page=1&count=5`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})


app.get('/qa/questions/:question_id/answers', (req, res) => {
  axios({
    url: `${API}/qa/questions/${req.params.question_id}/answers&page=1&count=5`,
    method: 'GET',
    headers: { Authorization: APIInfo.token }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

// ***********************************************************************
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
})