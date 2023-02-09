const fs = require('fs');

const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern');


const generateHtml = (team) => {
    let teamContainer = '';
    for(const employee of team){
        let iEl;
        let roleAttribute;
        if(employee.getRole() === 'Manager'){
            iEl = `<i class="fa-solid fa-mug-hot "></i>`
            roleAttribute = `Office Number = ${employee.officeNumber}`
        }else if(employee.getRole() === 'Engineer'){
            iEl = `<i class="fa-solid fa-glasses "></i>`
            roleAttribute = `GitHub = <a target="_blank" href="https://github.com/${employee.github}">${employee.github}</a>`
        }else{
            iEl = `<i class="fa-solid fa-graduation-cap "></i>`
            roleAttribute = `School = ${employee.school}`
        }

        let container = `<div id="employee-container">
        <h3>
        <span>${employee.getName()} <br> ${iEl} ${employee.getRole()}</span>
        </h3>
        <p>ID: ${employee.id} <br> Email: <a target="_blank" href="mailto:${employee.email}">${employee.email}</a>  <br> ${roleAttribute}</p>
        </div>`;

        teamContainer += container;
    }

    const html = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="./style.css">
            <script src="https://kit.fontawesome.com/b1d2f96354.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <div id="team-container">
                ${teamContainer}
            </div>
            
        </body>
        </html>`
    fs.writeFile("..\\Team-Profile-Generator\\dist\\index.html", html, (err) => err ? console.error(err) : console.log('HTML generated!'));
}


module.exports = generateHtml;