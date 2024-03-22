#! /usr/bin/env node


import inquirer, { Answers, QuestionCollection } from "inquirer";

let question: QuestionCollection = [
  { message: "Enter first number", name: "num1", type: "number" },
  { message: "Enter second number", name: "num2", type: "number" },
  {
    message: "Select an operator to perform calculation",
    name: "operators",
    type: "list",
    choices: ["+", "-", "*", "/"],
  },
];
const answer = inquirer.prompt(question);
answer.then((answer) => {
  switch (answer.operators) {
    case "+":
      console.log(
        `The sum of ${answer.num1} and ${answer.num2} is ${
          answer.num1 + answer.num2
        }`
      );
      break;
    case "-":
      console.log(
        `The differece of ${answer.num1} and ${answer.num2} is ${
          answer.num1 - answer.num2
        }`
      );
      break;
    case "*":
      console.log(
        `The product of ${answer.num1} and ${answer.num2} is ${
          answer.num1 * answer.num2
        }`
      );
      break;
    case "/":
      console.log(
        `The quotient of ${answer.num1} and ${answer.num2} is ${
          answer.num1 / answer.num2
        }`
      );
      break;
    default:
      break;
  }
});
answer.catch((error)=>{
  console.log(`Enter valid operator`);
})
