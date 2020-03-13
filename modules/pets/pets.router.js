const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', json, (req, res) => {
  // Return all pets currently up for adoption.
  const a=Pets.get();
  return res.json(Pets.get());
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
});

module.exports = router;
