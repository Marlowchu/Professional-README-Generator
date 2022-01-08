// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

// switch statement to display the license badge the user choose
switch (license) {
  case 'MIT':
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)"
    break;
  case 'APACHE 2.0':
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)"
    break;
  case 'MPL 2.0':
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen)](https://opensource.org/licenses/MPL-2.0)"
    break;
  case 'NONE':
    return ""
    break;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // links to licenses
switch (license) {
  case 'MIT':
    return "(https://opensource.org/licenses/MIT)"
    break;
  case 'APACHE 2.0':
    return "(https://opensource.org/licenses/Apache-2.0)"
    break;
  case 'MPL 2.0':
    return "(https://opensource.org/licenses/MPL-2.0)"
    break;
  case 'NONE':
    return "(https://opensource.org/licenses/category)"
    break;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
 
  ${renderLicenseBadge(data.license)}
  

  ## Description

  ${data.description}


  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}

  ## License

  This application is covered under the "${data.license}" license, see ${renderLicenseLink(data.license)} for more info.
  

  ## Contributions

  ${data.contribution}


  ## Tests

  ${data.test}
 

  ## Questions  
  
  My GitHub username is [${data.github}](https://github.com/${data.github}).

  If you have any questions you can reach me at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
