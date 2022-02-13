// TODO: Include packages needed for this application
const fs =require('fs')
const inquirer = require('inquirer')
const {licenses} = require('./scrap.js')

// TODO: Create an array of questions for user input
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
        type:'input',
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
        type:'input',
        message:'List your collaborators.',
        name: 'collabs',
        when:(answers)=> answers.ynCredit===true
    },
    {
        type:'input',
        message:'List the creators of any third party assets you used.',
        name: 'creators',
        when:(answers)=> answers.ynCredit===true
    },
    {
        type:'list',
        message:'Choose a License',
        name: 'listLicense',
        choices: licenses,
    },
    {
        type:'confirm',
        message:'Do you have anyone to Tests?',
        name: 'ynTests'
    },
    {
        type:'editor',
        message:'Explain what the tests are and How to Run them',
        name: 'runningTests',
        when:(answers)=> answers.ynTests===true
    },
    {
        type:'input',
        message:'What Is your GitHub Username',
        name: 'userName',
    },
    {
        type:'input',
        message:'What Is your email',
        name: 'eMail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("file will be created Here: ", fileName);
    console.log("-------------------------------------")
    console.log(data);
    let FullText=``
    if(data.ynInst===true){
        FullText=`# ${data.repoName} \n## Description \n${data.motivation} ${data.codeProb} ${data.learned}
## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)
- [License](#license)\n## Installation\n${data.installReq}\n`
    }else {
        FullText=`# ${data.repoName} \n## Description \n${data.motivation} ${data.codeProb} ${data.learned}
## Table of Contents\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n`
    }
    FullText+=`## Usage\n${data.usage}\n`
    if(data.ynCredit===true){
        FullText+=`## Collaborators\n${data.collabs}\n${data.creators}\n`
    }
    switch(data.listLicense){
        case 'None':
            FullText+=`## License\n This application is not covered under any licenses.`
            break;
        case 'Apache License 2.0':
            FullText+=`## License\n This application is covered under the ${data.listLicense}.`
            break;
        case 'MIT License':
            FullText+=`## License\n This application is covered under the ${data.listLicense}.`
            break;
        case 'Creative Commons Zero v1.0 Universal':
            FullText+=`## License\n This application is covered under the ${data.listLicense} license.`
            break;
        case 'GNU Affero General Public License v3.0':
            FullText+=`## License\n This application is covered under the ${data.listLicense}.`
            break;
        case 'Mozilla Public License 2.0':
            FullText+=`## License\n This application is covered under the ${data.listLicense}.`
            break;    
        case 'The Unlicense':
            FullText+=`## License\n This application is covered under ${data.listLicense} license.`
            break;     
    }
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
//init();

answers= {
    repoName: 'NameOfRepo',
    motivation: 'theres a motivation here, i Promise. Blah blah blah.',
    codeProb: 'a problem was definitely solved here',
    learned: 'I learned how to use Inquirer and how to sspell ',       
    ynInst: true,
    installReq: 'these are the Steps of Installation, i should make this an external notepad thing as well',
    usage: 'this is a large note\r\n',
    ynCredit: true,
    collabs: 'i actuall liked the team I had for project one, so those Guys',
    creators: 'BLah, blah BlaH',
    listLicense: 'None'
  }
writeToFile("./createdReadMe/README.md",answers);






// inquirer
// .prompt([
//     {
//         type:'input',
//         message:'What is your name?',
//         name: 'myNameIs'
//     },
//     {
//         type:'input',
//         message:'What languages do you know?',
//         name: 'languages'
//     },
//     {
//         type:'input',
//         message:'What is your preferred method of communication?',
//         name: 'comms'
//     },])
// .then(function(answer){
//     console.log(answer);
// let arr=['myNameIs','languages','comms']
// for (i=0;i<arr.length;i++){
//         key=arr[i]
//         console.log(key)
//         console.log(answer[key])
//         fs.appendFile('log.txt',`${answer.key} \n`,err =>
//         err ? console.error(err) : console.log('Commit logged!')
//         )
//     }
// })