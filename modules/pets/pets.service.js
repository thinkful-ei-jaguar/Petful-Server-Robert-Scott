const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

//for each item in cats in store(db), get back one
store.cats.forEach(cat => pets.cats.enqueue(cat));

//for each item in dogs in store(db), get back one
store.dogs.forEach(dog => pets.dogs.enqueue(dog));


//console.log(pets.cats)
//console.log(pets.dogs)
// --------------------

module.exports = {
  catAndDogGet() {
    // Return the pets next in line to be adopted.
    const cat=pets.cats.show();
    const dog=pets.dogs.show();
    return [cat,dog];
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type === "cat") {
      pets.cats.dequeue();
    }
    else {
      pets.dogs.dequeue();
    }
  },
  getAllDogs(){
    arr2=pets.dogs.all();
    return arr2
  },
  getAllCats(){
    arr2=pets.cats.all();
    return arr2
  }
};
