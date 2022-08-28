// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0 License"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU AGPL v3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[License: MIT](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0 License"){
    return "[License: Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU AGPL v3") {
    return "[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)"
  } else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT" || license === "Apache 2.0 License" || license === "GNU AGPL v3") {
    return  `
    ## License
    `
  } else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.descr}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contribution)
- [Tests](#test)
- [License](#license)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributions

${data.constributions}

## Tests

${data.test}

## ${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Questions

IF you have any questions, issues or you would like to get in touch you can find me on Github at [${data.github}](https://github.com/${data.github}) and email me at ${data.email})
`;
}

module.exports = { generateMarkdown, renderLicenseBadge };
