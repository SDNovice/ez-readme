// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
  return `\n## License
  \n License is covered by ${license}!`
  }else{
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.LicenseChosen)}${renderLicenseLink(data.LicenseChosen)}
  \n## Table of Contents 
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
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
