// Create new farm
const {Farm} = require('./index')
test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

// Total income 
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Pig, Horse} = require('./animals')

test('Add all elemtenns to Farm and calculate total income', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(10))
  farm.addCrop(new Sugarcane(10))
  farm.addAnimal(new Cow(10))
  farm.addAnimal(new Pig(10))
  farm.addAnimal(new Horse(10))
  expect(farm.calculateIncome()).toBeCloseTo(3000)
})
