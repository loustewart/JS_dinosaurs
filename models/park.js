const Dinosaur = require('./dinosaur.js')

const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs
}


Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
}

Park.prototype.deleteDinosaur = function(dinosaur){
  this.dinosaurs.pop(dinosaur)
}

// Park.prototype.mostVisits = function(dinosaurs){
//   for dinosaur in dinosaurs
//
//
// }


Park.prototype.countSpecies = function(dinosaurs){
  var filteredSpecies = [];
  for (var dinosaur of this.dinosaurs){
    if (dinosaur.species[0] === 't-rex'){
      filteredSpecies.push(species)
    }
  }
  return filteredSpecies.length

}


// var students = ['Alice', 'Bob', 'Abdul', 'Sue', 'Alvin'];
// var filteredStudents = filterNames(students, 'A');
// console.log('Filtered Students:', filteredStudents);
//


module.exports = Park;
