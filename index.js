const inquirer = require("inquirer");
const fs = require("fs");

let createTemplate = () => {
    return `<h1>
    ${name}
</h1>

${licenseBadge}

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
    ${description}
</p>

<h3>Built With</h3>

<ul>
    <li>${builtwith1}</li>
    <li>${builtwith1}</li>
</ul>
    
<h2 id="installation">
    Installation
</h2>
    
<p>
    Within my portfolio, you will currently find a short site intro and 3 projects I have worked on (one of them being an audio project). My contact information and a short bio are also found here.
</p>
    
<h2 id="usage">
    Usage
</h2>
    
<p>
    ${usage}
</p>

<h2 id="license">
    License
</h2>
    
<p>
    Distributed under ${license}. See LICENSE for more information.
</p>

<h2 id="contributing">
    Contributing
</h2>
    
<p>
    ${contribution}
</p>

<h2 id="tests">
    Tests
</h2>
    
<p>
    ${test}
</p>

<h2 id="contact">
    Contact
</h2>
    
<ul>
    <li>Github Profile: https://github.com/${github}</li>
    <li>Email: ${email}</li>
</ul>`
};

let questions = [
    {
    type: 'input', // done
    name: 'name',
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