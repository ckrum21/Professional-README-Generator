// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, installation, usageInformation, contributionGuidelines, testInstructions}) =>
  `# <${title}>

  ## Description
  ${description}
  
  ## Table of Contents
  
  ## Installation
  ${installation}

  ## Usage
  ${usageInformation}

  ## Contribute Guidelines
  ${contributionGuidelines}

  ## Tests
  ${testInstructions}

  ## Credits
  
  
  ## License
  
  
  ## Badges
  
  ## Features
  
  

  
  

  `;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      message: 'What is the contribution guidelines of your project?',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'What is the test instructions for your website?',
    },
  ])

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
