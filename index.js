// These are my imports that help make my index function
const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const gen = require('./utils/generateMarkdown');

//These are the array of questions that will be prompet to user
// via inquirer

const questions = [ 
    {
        type: 'input',
        message: "What is your title?",
        name: "title"
    },
    {
        type: 'input',
        message:  "Please describe your application",
        name: 'description'
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
    },
    {
        type:'input',
        name: 'gitInfo',
        message: "Pleas enter your github username",
    },
    {
        type:'input',
        name: 'email',
        message: "Pleas enter your email",
    }
];

// This funciton will create the README.md file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => 
    err ? console.log(err) : console.log("Commit Logged")) 
}

// This function initializes the inquirer prompt method and takes
// the users reponses to create the content of the README.md
function init() {
    inquirer.prompt(questions).then(answer => {
    const reponse = gen((answer))
    writeToFile('README.md', reponse);
    })
       
}

// Function call to initialize app
init()
