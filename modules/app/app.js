const express = require('express');
const cors = require('cors');
const catsRouter = require('../cats/cats.router');
const dogsRouter = require('../dogs/dogs.router');

const app = express();

app.use(cors());

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));
app.use('/api/cat', catsRouter);
app.use('/api/dog', dogsRouter);


module.exports = app;
