const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 90);
    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 20);
    dinosaur4 = new Dinosaur('brontosaurus', 'herbivore', 300);
    park = new Park('Jurrasic Park', 50, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function(){
      const actual = park.name;
      assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  }) ;

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur()
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.deleteDinosaur()
    const actual = park.dinosaurs.length
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.mostVisits()
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
