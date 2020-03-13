const express = require('express');
const json = require('body-parser').json();

const Cats = require('./cats.service');
// const People = require('../people/people.service');

const catsRouter = express.Router();

catsRouter
  .get('/', (req, res) => {
  // Return a cat
  
  });

catsRouter
  .delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  });

module.exports = catsRouter;
