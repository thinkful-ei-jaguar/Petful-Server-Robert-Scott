const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

//console.log(pets.cats)
//console.log(pets.dogs)
// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const cat=pets.cats.show();
    const dog=pets.dogs.show();
    return [cat,dog];
  },

  dequeue(type) {
    // Remove a pet from the queue.
  }
};
