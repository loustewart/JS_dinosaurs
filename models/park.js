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

Park.prototype.mostVisits = function




module.exports = Park;




Math.max.apply(Math, dinosaurs.map(function(o) { return o.guestsAttractedPerDay; }))
