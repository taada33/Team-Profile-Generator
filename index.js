const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const generateCss = require('./src/generateCss');

let team = [];

//passes team array to generateHtml and generateCss
const init = (team) => {
    generateHtml(team);
    generateCss();
}

const addTeam = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Add engineer / intern or finish team?",
                choices: ["Engineer", "Intern", "Finish Team"],
                name: 'choose',
            }
        ]).then((response) => {
            if(response.choose === "Engineer"){
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: "What is your engineer's name?",
                            name: 'name',
                        },
                        {
                            type: 'input',
                            message: "What is your engineer's employee ID?",
                            name: 'id',
                        }, 
                        {
                            type: 'input',
                            message: "What is your engineer's email?",
                            name: 'email',
                        }, 
                        {
                            type: 'input',
                            message: "What is your engineer's github?",
                            name: 'github',
                        }]).then((response) => {
                            const engineer = new Engineer(response.name, response.id, response.email, response.github);
                            team.push(engineer);
                            addTeam();
                        })
            }else if(response.choose === "Intern"){
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: "What is your intern's name?",
                            name: 'name',
                        },
                        {
                            type: 'input',
                            message: "What is your intern's employee ID?",
                            name: 'id',
                        }, 
                        {
                            type: 'input',
                            message: "What is your intern's email?",
                            name: 'email',
                        }, 
                        {
                            type: 'input',
                            message: "What is your intern's school?",
                            name: 'school',
                        }]).then((response) => {
                            const intern = new Intern(response.name, response.id, response.email, response.school);
                            team.push(intern);
                            addTeam();
                        })
                    
            }else{
                init(team);
            }
        })
}

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your team manager's employee ID?",
            name: 'id',
        }, 
        {
            type: 'input',
            message: "What is your team manager's email?",
            name: 'email',
        }, 
        {
            type: 'input',
            message: "What is your team manager's office number?",
            name: 'officeNumber',
        }])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team = [manager];
        addTeam();
    })

    