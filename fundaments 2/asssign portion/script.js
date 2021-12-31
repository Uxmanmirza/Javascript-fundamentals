"use strict";

/*// Simple Function
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const pakFun = describeCountry("Pakistan", "six million", "Islamabad");
const indFun = describeCountry("India", "five million", "Dehli");
const amerFun = describeCountry("America", "three million", "New york");

console.log(pakFun, indFun, amerFun);

// Function expression
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let perPakistan = percentageOfWorld1(15);
let perUSA = percentageOfWorld1(1600);
let perGermeny = percentageOfWorld1(2500);

console.log(perPakistan);
console.log(perUSA);
console.log(perGermeny);

// Function declaration
let percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

let pernPakistan = percentageOfWorld1(15);
let pernUSA = percentageOfWorld1(160000);
let pernGermeny = percentageOfWorld1(8757875);

console.log(pernPakistan);
console.log(pernUSA);
console.log(pernGermeny);

// Arrow Function

let percentageOfWorld3 = (population) => (population / 7900) * 100;

let perntPakistan = percentageOfWorld1(160);
let perntUSA = percentageOfWorld1(160374);
let perntGermeny = percentageOfWorld1(870000);

console.log(perntPakistan, perntUSA, perntGermeny);

// Function calling within the function

let describePopulation = function (country, population) {
  let percentage = percentageOfWorld5(population);
  return `${country} has ${population}, which is about ${percentage} of the world`;
};
let percentageOfWorld5 = function (population) {
  return (population / 7900) * 100;
};

let perntaPakistan = describePopulation("Pakistan", 1607);
let perntaUSA = describePopulation("USA", 124234);
let perntaGermeny = describePopulation("Germeny", 900000);

console.log(perntaPakistan);
console.log(perntaUSA);
console.log(perntaGermeny); */

// Simple Array
const population = [23, 45, 67, 78];

console.log(population.length);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let perPakistan = percentageOfWorld1(23);
let perUSA = percentageOfWorld1(45);
let perGermeny = percentageOfWorld1(67);
let perIndia = percentageOfWorld1(78);

// console.log(perPakistan);
// console.log(perUSA);
// console.log(perGermeny);
// console.log(perIndia);

const percentage = [perPakistan, perUSA, perGermeny, perIndia];

console.log(percentage);

// Array methods

const pakNeigh = ["India", "China", "Afghanistan", "Iran"];
console.log(pakNeigh);
pakNeigh.push("Utopia");
console.log(pakNeigh);
// pakNeigh.unshift("Utopia");
// console.log(pakNeigh);
// pakNeigh.pop();
// console.log(pakNeigh);
pakNeigh.pop("Utopia");
console.log(pakNeigh);
if (!pakNeigh.includes("Germeny")) {
  console.log("Probably not a central Enropean country ");
}

pakNeigh[pakNeigh.indexOf("india")];
console.log(pakNeigh);
