const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    ])
}