// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

console.log('readme is running')

const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFile = require('./utils/generateFile.js');
const { constant } = require('lodash');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your repository?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please enter some information about your project:',
        validate: aboutInput => {
            if (aboutInput) {
                return true;
            } else {
                console.log('Please enter some information!')
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Does your project need special instructions on how to install?',
        default: true
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions:',
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain the usage of this project:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC']
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Will your project be open to contributions?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please explain your contribution guidlines for this project:',
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Will your project need testing instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please input testing instructions for the user:',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitLink',
        message: 'Please enter your GitHub Profile Link:',
        validate: gitLinkInput => {
            if (gitLinkInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email adress for people to contact you:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email adress!');
                return false;
            }
        }
    }

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt(questions) 
        .then(data => {
            console.log(data);
            return generateMarkdown(data);
        })
        .then(pageMarkdown => {
            return writeFile(pageMarkdown);
        })
        .catch(err => {
            console.log(err);
        })
}
function init() {
    promptQuestions()
}

init();

