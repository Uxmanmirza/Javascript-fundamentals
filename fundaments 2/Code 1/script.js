// "in strict";
const team1 = "Dolphins";
const team2 = "Koalas";
// Match 1
let calAverage = (a, b, c) => a + b + c / 3;
// console.log(calAverage(44, 23, 71));
let Dolaverage = calAverage(44, 23, 71);
console.log(Dolaverage);
let Koalasaverage = calAverage(65, 54, 49);
console.log(Koalasaverage);

function checkWinner(avgDolhins, avgKoalas) {
  return `${team2} win this match by ${avgDolhins} vs ${avgKoalas}`;
}

let finalWinner = checkWinner(Dolaverage, Koalasaverage);
console.log(finalWinner);

// Match 2
function calAverage2(a, b, c) {
  return a + b + c / 3;
}

let Dolaverage2 = calAverage2(85, 54, 41);
console.log(Dolaverage2);
let Koalasaverage2 = calAverage2(23, 34, 27);
console.log(Koalasaverage2);

let checkWinner2 = (avgDolhins2, avgKoalas2) => {
  return `${team1} win this match by ${avgKoalas2} vs ${avgDolhins2} `;
};

let finalWinner2 = checkWinner(Dolaverage2, Koalasaverage2);
console.log(finalWinner2);
