// switch function ...

// let language = "spanish";

// switch (language) {
//   case "mandarin":
//     console.log("Most number of native speakers");

//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;

//   default:
//     console.log("Great language too:) ");
// }

// Tipp app by the If/else statement
let tip;
let bill = Number(prompt("What is your bill amount?"));

if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15;
  console.log(
    `The bill was ${bill} , the tip was ${tip} , your total bill will be ${
      bill + tip
    } `
  );
} else {
  tip = bill * 0.2;
  console.log(
    `The bill was ${bill} , the tip was ${tip} , your total bill will be ${
      bill + tip
    } `
  );
}

// // Tipp app by the conditional operator
// // let bill = Number(prompt("What is your bill amount?"));
// // let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // console.log(
// //   `The bill was ${bill} , the tip was ${tip} , your total bill will be ${
// //     bill + tip
// //   } `
// );
