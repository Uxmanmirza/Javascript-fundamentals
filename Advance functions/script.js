// Arrow function returning another arrow function...
const greet = (greetings) => (name) => console.log(`${greetings} ${name}`);

const greeterhey = greet("hey");
greeterhey("Jonas");
