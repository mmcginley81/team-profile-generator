// // WHEN I start the application
// // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// // WHEN I enter the team manager’s name, employee ID, email address, and office number
// // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// // WHEN I select the engineer option
// // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// // WHEN I select the intern option
// // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// // WHEN I decide to finish building my team
// // THEN I exit the application, and the HTML is generated

// const { test } = require("@jest/globals");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// const { BUILDER_KEYS } = require('@babel/types');
​
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');
​
// const render = require('./lib/render');
const render = require('./src/template-builder.js')
const teamArray = [];

function addManager() {
   inquirer.prompt([
       {
           type: 'input',
           name: 'managerName',
           message: 'What is the team manager\'s name?'
       },
       {
        type: 'input',
        name: 'managerId',
        message: 'What is the team manager\'s employee ID?'
        },       
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the manager\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office phone number?'
        }
       
   ]).then(res => {
       const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber)
        teamArray.push(manager);
        crossroads();
   })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer\'s employee ID?'
        }, 
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the manager\'s email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers\'s Github username?'
        }
    ]).then(res => {
        const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.github)
         teamArray.push(engineer);
         crossroads();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s employee ID?'
        }, 
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school name?'
        }
    ]).then(res => {
        const intern = new Intern(res.internName, res.internId, res.internEmail, res.school)
         teamArray.push(intern);
         crossroads();
    })
}

function crossroads() {
    // inquirer list
    // With response, use a switch statement
    // Call the respective function 
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployees',
            message: 'Do you want to add another employee?',
            choices: ['Add another engineer', 'Add another intern', 'Finished adding all employees on this team.']
        }
    ]).then(data => {
        switch (data){
            case 0:
                return addEngineer();
                break;
            case 1:
                return addIntern();
                break;
            case 2: 
                return buildTeam();
                break;
            default:
                console.log("failed")
                break;
        }
        
        
        // const choices = choices(res.choices)
        // if('Finished adding all employees on this team.'){
        //     buildTeam();
        // }
        // else if('Add another engineer'){
        //     addEngineer();
        // }
        // else if('Add another intern'){
        //     addIntern();
        // }
    })
}

addManager();

function buildTeam() {

        fs.writeFileSync(outputPath, render(teamArray), 'utf-8')
}

console.log("test")