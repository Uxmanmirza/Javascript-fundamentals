// const population = "130000";

// if (population >= 33000) {
//   console.log("Portugal's population is above average");
// } else {
//   console.log("Portugal's population is 22 million below average");
// }

let marksMass = 92;
let marksHeight = 1.69;
let johnMass = 78;
let johnHeight = 1.95;

let marksBMI = 92 / 1.69 ** 2;
let johnBMI = 78 / 1.95 ** 2;
console.log(marksBMI);
console.log(johnBMI);

if (marksBMI > johnBMI) {
  console.log(`mark's BMI(${marksBMI}) is higher than johns`);
}
