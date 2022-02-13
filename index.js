// TODO: Include packages needed for this application
const fs =require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const licenses=['None',
'Apache License 2.0',
'MIT License',
'Creative Commons Zero v1.0 Universal',
'GNU Affero General Public License v3.0',
'Mozilla Public License 2.0',
'The Unlicense']
const questions = [
    {
        type:'input',
        message:'What is the name of your Repository?',
        name: 'repoName'
    },
    {
        type:'input',
        message:'What was the motivation to make this project?',
        name: 'motivation'
    },
    {
        type:'input',
        message:'What problem does your code solve?',
        name: 'codeProb'
    },
    {
        type:'input',
        message:'What did you learn?',
        name: 'learned'
    },
    {
        type:'confirm',
        message:'Do you have to install anything?',
        name: 'ynInst'
    },
    {
        type:'editor',
        message:'What are the steps required to install your project?',
        name: 'installReq',
        when: (answers)=> answers.ynInst===true
    },
    {
        type:'editor',
        message:'What are the steps required for use of this software?',
        name: 'usage'
    },
    {
        type:'confirm',
        message:'Do you have anyone to Credit?',
        name: 'ynCredit'
    },
    {
        type:'editor',
        message:'List your collaborators.',
        name: 'collabs',
        when:(answers)=> answers.ynCredit===true
    },
    {
        type:'editor',
        message:'List the creators of any third party assets you used.',
        name: 'creators',
        when:(answers)=> answers.ynCredit===true
    },
    {
        type:'list',
        message:'Choose a License.',
        name: 'listLicense',
        choices: licenses,
    },
    {
        type:'confirm',
        message:'Do you have any Tests?',
        name: 'ynTests'
    },
    {
        type:'editor',
        message:'Explain what the tests are and How to Run them.',
        name: 'runningTests',
        when:(answers)=> answers.ynTests===true
    },
    {
        type:'input',
        message:'What Is your GitHub Username: ',
        name: 'userName',
    },
    {
        type:'input',
        message:'What Is your email: ',
        name: 'eMail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("file will be created Here: ", fileName);
    console.log("-------------------------------------")
    console.log(data);
    let FullText=``
    let Title=`# ${data.repoName} \n`
    let Description=`## Description \n${data.motivation} ${data.codeProb} ${data.learned}\n`
    if(data.ynInst===true){
        tableofContents=`## Table of Contents\n- [Description](#Description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Collaborators](#Collaborators)
- [License](#license)\n- [Tests](#Tests)\n- [Questions](#Questions)\n## Installation\n${data.installReq}\n`
    }else {
        tableofContents=`## Table of Contents\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n`
    }
    usage=`## Usage\n${data.usage}\n`
    if(data.ynCredit===true){
        Collaborators=`## Collaborators\n${data.collabs}\n${data.creators}\n`
    }else{
        Collaborators=``
    }
    let license=``
    let licensebadge=``
    switch(data.listLicense){
        case 'None':
           license=`## License\n This application is not covered under any licenses.\n`
           licensebadge=``
            break;
        case 'Apache License 2.0':
           license=`## License\n This application is covered under the ${data.listLicense}.\n`
           licensebadge=`![](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen)`
            break;
        case 'MIT License':
            license=`## License\n This application is covered under the ${data.listLicense}.\n`
            licensebadge=`![](https://img.shields.io/badge/license-MIT%20License-brightgreen)`
            break;
        case 'Creative Commons Zero v1.0 Universal':
            license=`## License\n This application is covered under the ${data.listLicense} license.\n`
            licensebadge=`![](https://img.shields.io/badge/license-MIT%20License-brightgreen)`
            break;
        case 'GNU Affero General Public License v3.0':
            license=`## License\n This application is covered under the ${data.listLicense}.\n`
            licensebadge=`![](https://img.shields.io/badge/license-GNU%20Affero%20General%20Public%20License%20v3.0-brightgreen)`
            break;
        case 'Mozilla Public License 2.0':
            license=`## License\n This application is covered under the ${data.listLicense}.\n`
            licensebadge=`![](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen)`
            break;    
        case 'The Unlicense':
            license=`## License\n This application is covered under ${data.listLicense} license.\n`
            licensebadge=`![](https://img.shields.io/badge/license-The%20Unlicense-brightgreen)`
            break;     
    }
    let tests=``
    if(data.ynTests===true){
       tests=`## Tests\n${data.runningTests}\n`
    }
    Questions=
`## Questions
If you have any questions, please reach to me via GitHub:\n
[Chris Koilparampil](https://github.com/${data.userName})\n
Or if you would prefer to email me, please email me at:\n
[${data.eMail}](${data.eMail})`

FullText=Title+`\n`+licensebadge+`\n`+Description+tableofContents+usage+Collaborators+license+tests+Questions
//console.log(FullText)




    fs.writeFile(fileName,FullText,function (err) {
             if (err) throw err;
            console.log('README.md Saved!');})






}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers){
        writeToFile("./createdReadMe/README.md",answers);
    });
}

// Function call to initialize app
init();






