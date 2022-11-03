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

const addEmployee = () => {
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
            type: 'list',
            name: 'role',
            message: "What is your employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's github username?",
            when: (input) => input.role === 'Engineer',
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
            when: (input) => input.role === 'Intern',
            validate: inputSchool => {
                if (inputSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.")
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
    .then(employeeInfo => {
        var {name, id, email, role, github, school, confirmEmployee} = employeeInfo
        var employee
        if (role === 'Engineer'){
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        
        teamGroup.push(employee);
        if (confirmEmployee) {
            return addEmployee(teamGroup);
        } else {
            return teamGroup;
        }

    })
};

//writing html code
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your team profile cards are created successfully!")
        }
    })
}

addManager()
.then(addEmployee)