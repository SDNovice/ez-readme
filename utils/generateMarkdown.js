// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  \n## Description 
  ${data.description} 
  \n## Table of Contents
  ${data.toc} 
  \n## Installation
  ${data.installation} 
  \n## Usage
  ${data.usage}  
  \n## Contributing
  ${data.contributing}  
  \n## Tests
  ${data.tests}`  
}

module.exports = generateMarkdown;