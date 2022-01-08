// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown`)
// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'title',
        message: 'Project title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Description of  the project?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'How to install?',
          default: `npm i`,
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Any special usage information?',
          default: `none`,
        },
        {
        type: 'list',
        message: 'Choose license applicable to your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0','BSD 3.','NONE'],
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'Contribution information?',
          default: `none`,
        },
        {
          type: 'input',
          name: 'test',
          message: 'How to test?',
          default: `npm test`,
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter Github username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Email address?',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Generating README...");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const readmeInfo = generateMarkdown(answers);
        writeToFile('./utils/README.md', readmeInfo);
    })
    .catch(err => { console.log(err)});
}

// Function call to initialize app
init();
