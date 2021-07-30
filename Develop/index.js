const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const template = require('./src/index')
const fs = require('fs')
const employeeList = []

function userPrompt() {
    inquirer.prompt([{
        type: 'input',
        name: 'userName',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'userId',
        message: 'Enter Your ID?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Please Enter Your Emailemail?'
    },
    {
        type: 'input',
        name: 'userOfficeNumber',
        message: 'Please Enter Your Office Number?'
    }


]).then(function (userResponse) {
    const newEmployee = new Manager(userResponse.userName, userResponse.userId, userResponse.userEmail, userResponse.userOfficeNumber)
    employeeList.push(newEmployee)
    console.log(newEmployee.getId())
    console.log(newEmployee)
}).then(function () {
    inquirer.prompt([{

        type: 'input',
        name: 'userName',
        message: 'Please Enter your Engineers name?'
    },
    {
        type: 'input',
        name: 'userId',
        message: 'What is your Engineers Company ID?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Please List Your Engineers email?'
    },
    {
        type: 'input',
        name: 'userGithub',
        message: 'What is the Engineers Github?'

    }]).then(function (userResponse) {
        const newEmployee = new Engineer(userResponse.userName, userResponse.userId, userResponse.userEmail, userResponse.userGithub)
        employeeList.push(newEmployee)



    }).then(function () {
        inquirer.prompt([{
            type: 'input',
            name: 'userName',
            message: 'Please List Your Interns name?'
        },
        {
            type: 'input',
            name: 'userId',
            message: 'Please List Your Interns ID?'
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'What is your Interns email?'
        },
        {
            type: 'input',
            name: 'userSchool',
            message: 'Where Did they attend School?'

        }]).then(function (userResponse) {
            const newEmployee = new Intern(userResponse.userName, userResponse.userId, userResponse.userEmail, userResponse.userSchool)
            employeeList.push(newEmployee)
            
            const renderedHTML = template(employeeList)
            console.log(renderedHTML);
            fs.writeFileSync('./dist/index.html', renderedHTML);
        })
       
    
    })
    
})
}

userPrompt();