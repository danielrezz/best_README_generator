const inquirer = require("inquirer");
const fs = require("fs");

let licenseBadge = (answers) => {
    if (answers.license === 'Apache 2.0 License') {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (answers.license === 'Eclipse Public License 1.0') {
        return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (answers.license === 'GNU GPL v3') {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (answers.license === 'The MIT License') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers.license === 'The Do What the Fuck You Want to Public License') {
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    };
};

let createTemplate = (answers) => {
    return `<h1>
    ${answers.namer}
</h1>

${licenseBadge(answers)}

<h3>
    Table of Contents
</h3>

<ol>
    <li><a href="#about" style= "text-decoration:none">About the Project</a></li>
    <li><a href="#installation" style= "text-decoration:none">Installation</a></li>
    <li><a href="#usage" style= "text-decoration:none">Usage</a></li>
    <li><a href="#license" style= "text-decoration:none">Contributing</a></li>
    <li><a href="#contributing" style= "text-decoration:none">Contributing</a></li>
    <li><a href="#tests" style= "text-decoration:none">Tests</a></li>
    <li><a href="#contact" style= "text-decoration:none">Contact</a></li>
</ol>
    
<h2 id="about">
    About the Project
</h2>
    
<p>
    ${answers.description}
</p>

<h3>Built With</h3>

<ul>
    <li>${answers.builtwith1}</li>
    <li>${answers.builtwith2}</li>
</ul>
    
<h2 id="installation">
    Installation
</h2>
    
<p>
    ${answers.install}
</p>
    
<h2 id="usage">
    Usage
</h2>
    
<p>
    ${answers.usage}
</p>

<h2 id="license">
    License
</h2>
    
<p>
    Distributed under ${answers.license}. 
    <br>
    Please click on the LICENSE badge at the top for more information.
</p>

<h2 id="contributing">
    Contributing
</h2>
    
<p>
    ${answers.contribution}
</p>

<h2 id="tests">
    Tests
</h2>
    
<p>
    ${answers.test}
</p>

<h2 id="contact">
    Contact
</h2>

<p>For any questions, please contact via GitHub or email.</p>
    
<ul>
    <li>Github Profile: https://github.com/${answers.github}</li>
    <li>Email: ${answers.email}</li>
</ul>`
};

let questions = [
    {
    type: 'input', // done
    name: 'namer',
    message: "What is the name of your project?",
    },
    {
    type: 'input', //done
    name: 'description',
    message: "Enter a detailed description about your project.",
    },
    {
    type: 'input', //done
    name: 'builtwith1',
    message: "List one technology used in your project.",
    },
    {
    type: 'input', //done
    name: 'builtwith2',
    message: "List another technology used in your project.",
    },
    {
    type: 'input',
    name: 'install',
    message: "List steps on how to install your project.",
    // default: "No GitHub account!"
    },
    {
    type: 'input', //done
    name: 'usage',
    message: "How can your project be used?",
    },
    {
    type: 'input', //done
    name: 'contribution',
    message: "Enter any guidelines on how users can contribute to your project.",
    },
    {
    type: 'input', //done
    name: 'test',
    message: "How can your project be tested?",
    },
    {
    type: 'list', //need to add badge based on selection
    name: 'license',
    message: "Please select one of the following licenses for your project.",
    choices: [
        'Apache 2.0 License', 
        'Eclipse Public License 1.0', 
        'GNU GPL v3',
        'The MIT License',
        'The Do What the Fuck You Want to Public License'
    ]},
    {
    type: 'input', //done
    name: 'github',
    message: "What is your GitHub username?",
    },
    {
    type: 'input', //done
    name: 'email',
    message: "What is your email address?",
    },
];

inquirer
.prompt(questions)
  .then(answers => {
    // console.log(answers);

    let generateTemplate = createTemplate(answers);

    fs.writeFile("yourProjectREADME.md", generateTemplate, licenseBadge, (err) => {
        if (err) throw err;
        console.log("You now have the best README ever.");
    });
})

  .catch(error => {
    console.log(error);
  });