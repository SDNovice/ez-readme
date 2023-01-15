// This function takes in the questions from the choices array and
// returns the proper format for the badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'Apache_2.0'){
   return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }else if (license == 'Boost_1.0'){
   return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }else if (license == 'BSD 3-Clause') {
   return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  }else{
  return ``
  }

}

// This funciton takes in the user response and renders the proper link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Apache_2.0'){
    return `(https://opensource.org/licenses/Apache-2.0)`
   }else if (license == 'Boost_1.0'){
    return `(https://www.boost.org/LICENSE_1_0.txt)`
   }else if (license == 'BSD 3-Clause') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
   }else{
   return ``
   }
}

// This functions adds a license section to the README.md file if one
// is selected
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
  return `\n## License
  \n License is covered by ${license}!`
  }else{
    return ``
  }
}

// This function holds the content that will be added to the README.md file
// it will be exported and take in the reponses from the quesions array
// via inquirer
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.LicenseChosen)}${renderLicenseLink(data.LicenseChosen)}
  \n## Table of Contents 
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Questions](#questions)
  \n## Description 
  ${data.description} 
  \n## Installation
  ${data.installation} 
  \n## Usage
  ${data.usage}
  ${renderLicenseSection(data.LicenseChosen)}
  \n## Contributing
  ${data.contributing}  
  \n## Tests
  ${data.tests}
  \n## Questions
  [${data.gitInfo}](https://github.com/${data.gitInfo})
  
  ${data.email}`  
}

module.exports = generateMarkdown;
