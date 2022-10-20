// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [""];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`, readmeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created README file.")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to create a README.md file?",
        name: "answer",
      },
    ])
    .then((response) => {
      if (response.answer) {
        readmeStart();
      } else {
        console.log("Closing app.");
      }
    });
}

function readmeStart() {
  console.log(
    "Please enter the information you would like to put inside each section of the readme.\nIf do not want to include a section, type 'none' when prompted."
  );
  inquirer.prompt([
    {
      type: "input",
      //   message: "What is the title of the project?",
      message: console.log("test"),
      name: "title",
    },
    {
      type: "input",
      message: "What is the description of the project?",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install the project?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do people use the project?",
      name: "usage",
    },
    {
      type: "input",
      message: "Which license are you using?",
      name: "license",
    },
    {
      type: "input",
      message: "What can people do if they want to contribute to the project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What can people do to test the project?",
      name: "tests",
    },
    {
      type: "input",
      message: "What are common questions and answers about the project?",
      name: "questions",
    },
  ]);
}

function generateReadme(data) {}

// Function call to initialize app
init();
