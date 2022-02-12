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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log("Space")
    console.log(data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(writeToFile("readMe.md",answers));





}

// Function call to initialize app
init();








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