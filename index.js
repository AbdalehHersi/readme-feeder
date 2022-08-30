// TODO: Include packages needed for this application
const fs = require("fs");
const inquire = require("inquirer");
const markdown = require("./utils/generateMarkdown")    //  import functions

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",  // title
    "What would you like to call your file?",   //  filename 
    "Provide a short description explaining the what, why, and how of your project.",   //  descr 
    "What are the steps required to install your project?", // install
    "Provide instructions for usage.",   //  use 
    "Please enter contribution guidelines.",    //  contr
    "Please enter test instructions.",  //  test
    "Please enter your github username.",   //  github
    "Please enter your email.",  //  email
    "What license would you like to use?"   //  license
];

const [ projectTitleQ, filenameQ, descriptionQ, installationQ, usageQ, contributionsQ, testQ, githubQ, emailQ, licenseQ] = questions;
    //  store questions into variables
function questionsFunc(){
inquire.prompt([    //  user prompts
    {
        type: "input",
        message: projectTitleQ,
        name: "title"
    },
    {
        type: "input",
        message: filenameQ,
        name: "filename"
    },
    {
        type: "input",
        message: descriptionQ,
        name: "descr"
    },
    {
        type: "input",
        message: installationQ,
        name: "install"
    },
    {
        type: "input",
        message: usageQ,
        name: "usage"
    },
    {
        type: "input",
        message: contributionsQ,
        name: "constributions"
    },
    {
        type: "list",
        message: licenseQ,
        name: "license",
        choices: ['MIT', 'GNU AGPL v3', 'Apache 2.0 License'],
    },
    {
        type: "input",
        message: testQ,
        name: "test"
    },
    {
        type: "input",
        message: githubQ,
        name: "github"
    },
    {
        type: "input",
        message: emailQ,
        name: "email"
    }
])
.then((data) => {writeToFile(data.filename, data)})

.catch((error) => {console.log(error)})
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("One moment. Your file is being written\n");
    fs.writeFile(`${fileName}.md`, markdown.generateMarkdown(data), (error) =>
    error ? console.log("Sorry there was and error: " + error) : console.log("Success")
    )
}

// TODO: Create a function to initialize app
function init() {
     questionsFunc();
}

// Function call to initialize app
init();
