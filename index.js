// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function to write README file
function writeToFile(fileName, fileContent) {
  fs.writeFile(`${fileName}`, fileContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README file.')
  );
}

const readmeData = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  username,
  email,
  questions,
}) =>
  `<a id='readme-top'></a>
  ![GitHub](https://img.shields.io/badge/license-${license.toString().split(' ').join('')}-blue)
  # ${title}

  ### Table of Contents
  <ol>
  <li><a href='#description'>Description</a></li>
  <li><a href='#installation'>Installation</a></li>
  <li><a href='#usage'>Usage</a></li>
  <li><a href='#license'>License</a></li>
  <li><a href='#contributing'>Contributing</a></li>
  <li><a href='#description'>Tests</a></li>
  <li><a href='#description'>Questions</a></li>
  </ol>

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  Distributed unter the ${license} license. See \`LICENSE.txt\` for more information.
  
  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  ${questions}
  <br>
  GitHub - [${username}](https://github.com/${username})
  <br>
  Email - [${email}](mailto:${email})
  <p align="right">(<a href="#readme-top">back to top</a>)</p>`;

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Would you like to create a README.md file?',
        name: 'answer',
      },
    ])
    .then((response) => {
      if (response.answer) {
        readmePrompts();
      } else {
        console.log('Closing app.');
      }
    });
}

function readmePrompts() {
  console.log(
    'Please enter the information you would like to put inside each section of the readme.'
  );
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How do you install the project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage',
      },
      {
        type: 'checkbox',
        message: 'Which license are you using?',
        choices: [
          'GNU AGPLv3',
          'GNU GPLv3',
          'GNU LGPLv3',
          'Mozilla Public 2.0',
          'Apache 2.0',
          'MIT',
          'Boost Software 1.0',
          'the Unlicense',
        ],
        name: 'license',
      },
      {
        type: 'input',
        message:
          'What can people do if they want to contribute to the project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What are the testing instructions for the project?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'How should people reach you for questions?',
        name: 'questions',
      },
    ])
    .then((data) => {
      const fileName = `./readme_files/README_${data.title
        .toLowerCase()
        .split(' ')
        .join('')}.md`;
      const fileContent = readmeData(data);
      writeToFile(fileName, fileContent);
    });
}

// Function call to initialize app
init();
