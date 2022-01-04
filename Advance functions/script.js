// Arrow function returning another arrow function...
/*const greet = (greetings) => (name) => console.log(`${greetings} ${name}`);

const greeterhey = greet("hey");
greeterhey("Jonas");*/

/*const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          "\n"
        )} \n write option number  `
      )

      
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++,
      
      this.displayResults()
      this.displayResults('string');
      
    
            

      displayResults(type = 'array') 
      {
        if (type === 'array') {
          console.log(this.answers);
        } else if (type === 'string') {
          // Poll results are 13, 2, 4, 1
          console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    
    }
    //   displayResult(type = 'array') {
    //     if (type === 'array'){
    //         console.log(this.answers);
    //     } else if (type === 'string'){
    //         console.log(`Poll results are ${this.answers}.join(',')`);
    //     }
      
    }
    
  },
};
poll.registerNewAnswer();

document
  .querySelector(".pull")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answer:[5, 2, 3] });
//    [5, 2, 3]
//    [1, 5, 3, 9, 6, 1]*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".pull")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
