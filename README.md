# Petful-client

## Live Link 
https://petful.ralexblue.now.sh

## Client Link 
https://github.com/thinkful-ei-jaguar/Petful-Client-Robert-Scott

## Project Collaborators
Robert Perez
Scott Lingner

## API summary
The server is run using a local store and not linked to a database.It uses a queue system for the people in it and pets used in it.
### PET routes
#### "/pets" GET
gets all pets
#### "/pets/alldogs" GET
gets all dogs
#### "/pets/allcats" GET
gets all cats
#### "/pets/dog" GET
gets first dogs
#### "/pets/cat" GET
gets first cats
#### "/pets" DELETE
requires a body => "type:cat" or "type:dog" to tell which pet type to dequeue.
Deletes the first pet queue for adoption.
### People routes
#### "/people" GET
gets all people
#### "/people" DELETE
dequeue the  first person in line.
#### "/people" POST
requires a body => "person:whatevernameinhere" 
post one new person in store








