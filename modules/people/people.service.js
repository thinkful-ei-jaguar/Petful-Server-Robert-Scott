const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));
//console.log(people);
// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return people.allt();
  },

  enqueue(person) {
    // Add a person to the queue.
    return people.enqueue(person);
  },

  dequeue() {
    return people.dequeue();
    // Remove a person from the queue.
  }
};
