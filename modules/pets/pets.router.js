const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', json, (req, res) => {
  // Return all pets currently up for adoption.
  
  return res.json(Pets.catAndDogGet());
});
router.get('/cat',(req,res)=>{
  const cat =Pets.catAndDogGet()[0];
  return res.json(cat);
})
router.get('/dog',(req,res)=>{
  return res.json(Pets.catAndDogGet()[1]);
})
router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  return res
  .status(204)
  .json(Pets.dequeue(type));
});

module.exports = router;
