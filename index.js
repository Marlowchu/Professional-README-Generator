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
          message: 'Description of project?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Installation instructions?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Usage information?',
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
          message: 'Contribution guidelines?',
        },
        {
          type: 'input',
          name: 'test',
          message: 'Test instructions?',
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
            console.log("Success!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const readmeInfo = generateMarkdown(answers);
        writeToFile('./utils/README.md', readmeInfo);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
