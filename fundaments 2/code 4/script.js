function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill + bill * 0.15 : bill + bill * 0.2;
}

// const bill1 = calcTip(125);
// const bill2 = calcTip(555);
// const bill3 = calcTip(44);

// const bills = [bill1, bill2, bill3];

// console.log(bills);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
