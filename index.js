class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }
  addCrop(crop){
    this.crops.push(crop)
  }
  addAnimal(animal){
    this.animals.push(animal)
  }
  calculateIncome(){
    return this.crops
    .map(crop => crop.getYieldInEuros())
    .concat(this.animals.map(animal => animal.getValueInEuros()))
    .reduce((a,b) => a + b, 0)
  }
}
module.exports.Farm = Farm


// FARM REPORT //

const { Cow, Horse, Pig } = require('./animals')
const { Wheat, Sugarcane } = require('./crops')

const farm = new Farm('Vegan Ranch')
farm.addCrop(new Wheat(0))
farm.addCrop(new Sugarcane(0))
farm.addAnimal(new Cow(100))
farm.addAnimal(new Horse(10))
farm.addAnimal(new Pig(10))

  console.log(`
----------------------
- Farm: ${farm.name}
- No. of crops: ${farm.crops.length}
- No. of animals: ${farm.animals.length}
- Total income: ${farm.calculateIncome()}€ 
----------------------
  `)