let numNeighours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighours === 1) {
  console.log("Only 1 border!");
} else if (numNeighours > 1) {
  console.log("more than one border!");
} else {
  console.log("NO border");
}
