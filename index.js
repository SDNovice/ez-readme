// TODO: Include packages needed for this application
const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
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
    }
];
            
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.appendFile(fileName, JSON.parse(answers), (err) =>
    //  err ? console.log(err) : console.log("Commit Logged!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
    const title = gen((answer))
    fs.writeFileSync('README.md', title, (err) => 
    err ? console.log(err) : console.log("Commit Logged")
    ) })
}

// Function call to initialize app
init()


