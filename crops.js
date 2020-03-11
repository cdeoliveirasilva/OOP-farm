// Crop
class Crop {
  constructor(acres){
    this.acres = acres
  }
  getYieldInEuros(){
    return this.getYieldInKg() * this.price
  }
  getCosts(){
    return this.getCosts()
  }
}

// Wheat
class Wheat extends Crop {
  constructor(acres){
    super(acres)
    this.price = 1.5
}
  getYieldInKg(){
    return Math.pow(this.acres * 1.5, 1.3)
    // Math.pow function can be used for exponentiation
  }
  getCosts(){
    return this.acres * 340
  }
}


// Sugarcane
class Sugarcane extends Crop {
    constructor(acres){
      super(acres)
      this.price = 2
  }
  getYieldInKg(){
    return Math.pow(this.acres * 2.6, 1.1)
  }
  getCosts(){
    return this.acres * 166
  }
}

module.exports = { Wheat, Crop, Sugarcane }