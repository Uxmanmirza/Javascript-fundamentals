// Tip App

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill + bill * 0.15 : bill + bill * 0.2;
}

const bill1 = calcTip(125);
const bill2 = calcTip(555);
const bill3 = calcTip(44);

const bills = [bill1, bill2, bill3];

console.log(bills);
