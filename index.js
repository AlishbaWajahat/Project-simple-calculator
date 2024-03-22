#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var question = [
    { message: "Enter first number", name: "num1", type: "number" },
    { message: "Enter second number", name: "num2", type: "number" },
    {
        message: "Select an operator to perform calculation",
        name: "operators",
        type: "list",
        choices: ["+", "-", "*", "/"],
    },
];
var answer = inquirer_1.default.prompt(question);
answer.then(function (answer) {
    switch (answer.operators) {
        case "+":
            console.log("The sum of ".concat(answer.num1, " and ").concat(answer.num2, " is ").concat(answer.num1 + answer.num2));
            break;
        case "-":
            console.log("The differece of ".concat(answer.num1, " and ").concat(answer.num2, " is ").concat(answer.num1 - answer.num2));
            break;
        case "*":
            console.log("The product of ".concat(answer.num1, " and ").concat(answer.num2, " is ").concat(answer.num1 * answer.num2));
            break;
        case "/":
            console.log("The quotient of ".concat(answer.num1, " and ").concat(answer.num2, " is ").concat(answer.num1 / answer.num2));
            break;
        default:
            break;
    }
});
answer.catch(function (error) {
    console.log("Enter valid operator");
});
