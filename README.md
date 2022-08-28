# Readme-feeder
<br>

# Description

The Readme-feeder is a README file generator that takes user input from the command-line amd creates a professional README file with it. It uses Node.js and is a small and modular program. It saves you time if you just want to complete one as fast as possible. It also helped me learn how to modularize my projects more and how to make full use of importing and exporting different componenets. I personally plan to use it for future projects as it makes for a good template. You can also use it as a quick boilerplate that you can expand on.

# Links

[My github profile](https://github.com/AbdalehHersi)

[Readme-feeder repository](https://github.com/AbdalehHersi/readme-feeder)

<br>

# Installation

Before you can use the program, you must have [Node.js](https://nodejs.org/en/download/) and the [Inquirer](https://www.npmjs.com/package/inquirer) package installed. You can download [Node.js](https://nodejs.org/en/download/) from the Node download web page or clicking on [this](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) link for a more in-depth guide. 

Clone the repository code to a location of your choice using the command-line interface of your choice. Once you have done that, use `npm i` or `npm install` command-line interface on the same root level as the `package.json`. Once you've done that you should be good to go.

<br>

# Usage

To run the program all you need to do is enter `node index.js` Answer all the prompts and the README file will be generated. 

![Screenshot](./Week%209%20Challenge/Develop/utils/Untitled.png)

For a more in depth guide you can view this walkthrough.

[Video](https://drive.google.com/file/d/1rkf9GLft45axz_dgi8CXj_gftUx1x061/view)

<br>

# Challenge acceptance criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```