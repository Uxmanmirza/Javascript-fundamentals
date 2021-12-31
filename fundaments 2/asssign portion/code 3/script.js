let johnData = {
  johnMass: 92,
  johnHeight: 1.95,
  calcJohnBMI: function () {
    this.bmi = this.johnMass / this.johnHeight ** 2;
    return this.bmi;
  },
};
let MarksData = {
  marksMass: 78,
  marksHeight: 1.69,
  calcMarksBMI: function () {
     this.bmi = this marksMass / marksHeight ** 2;
     return this.bmi;
  },
};
johnData.calcJohnBMI();
marksData.calcBMI();
console.log(johnData.calcJohnBMI());
