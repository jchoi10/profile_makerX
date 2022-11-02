const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamGroup = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager of this project?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Manager's id number?",
            validate: inputId => {
                if (isNaN(inputId)) {
                    console.log ("Please enter the manager's id");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Manager's email?",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log ("Please enter the manager's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Manager's office number?",
            validate: inputOfficeNum => {
                if (isNaN(inputOfficeNum)) {
                    console.log ("Please enter the manager's office number");
                    return false;
                } else {
                    return true;
                }
            }
        },
    ]) .then(managerProp => {
        const {name, id, email, officeNumber} = managerProp;
        const manager = new Manager (name, id, email, officeNumber);
        teamGroup.push(manager);
    })
};

const addEmployee = () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the employee of this project?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's id number?",
            validate: inputId => {
                if (isNaN(inputId)) {
                    console.log ("Please enter the employee's id");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log ("Please enter the employee's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'role',
            message: "What is your employee's role?",
            validate: inputRole => {
                if (isNaN(inputRole)) {
                    console.log ("Please enter the employee's role");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add more employees on the team?',
            default: false
        }
    ])
}

addManager()