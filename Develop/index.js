// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'What is the usage instructions for your project?',
    },
    {
      type: 'input',
      name: 'contributionGuidelines',
      message: 'Who are the contributors of your project?',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'What is the test instructions for your website?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is used for your website?',
      choices:['MIT', 'GPL', 'BSD']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
    },

  ];

// TODO: Create a function to write README file
const printFile = fileContent => {
  return new Promise((resolve, reject) =>
  fs.writeFile('./generatedREADME.md', fileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
  ))
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(function(data) {
          console.log(data);
      var fileContent = generateMarkdown(data);
      printFile(fileContent)
      });
}

// Function call to initialize app
init();