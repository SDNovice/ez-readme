// TODO: Include packages needed for this application
const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const gen = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [ 
    {
        type: 'input',
        message: "What is your title?",
        name: "title"
    },
    {
        type: 'input',
        message:  "Please Describe your application",
        name: 'description'
    }, 
    {
        type:'input',
        message: 'Table of contents',
        name: 'toc'
    },
    {
        type: 'input',
        message: "How do you install it?",
        name: 'installation'
    }, 
    {
        type: 'input',
        message: "How is it used?",
        name: 'usage'
    }, 
    {
        type: 'input',
        message: "Contribution Guidelines?",
        name: 'contributing'
    }, 
    {
        type: 'input',
        message: "Test Instructions",
        name: 'tests'
    },
    {
        type: 'checkbox',
        name: 'LicenseChosen',
        message: "Which license would you like to use?",
        choices: ["Apache_2.0", "Boost_1.0", "BSD 3-Clause"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.appendFile(fileName, JSON.parse(answers), (err) =>
    //  err ? console.log(err) : console.log("Commit Logged!"))
    fs.writeFileSync(fileName, data, (err) => 
    err ? console.log(err) : console.log("Commit Logged")) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
    const reponse = gen((answer))
    writeToFile('README.md', reponse);
    })
       
}

// Function call to initialize app
init()
