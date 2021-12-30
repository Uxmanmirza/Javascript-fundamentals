"use strict";

// Simple Function
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
