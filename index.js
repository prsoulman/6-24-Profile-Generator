import inquirer from 'inquirer';
import fs from 'fs'; 
import Manager from './lib/Manager.js'

const mainMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'Direction',
        message: 'What type of employee would you like to create',
        choices: ['Manager', 'Engineer', 'Intern', 'Build Team'],
    }) 
    .then (({Direction}) => {
        console.log(Direction);
        if (Direction==='Manager') {
            askManager()
        }
    }) 
}
const askManager = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'id',
        message: 'What is the employees ID?',
    }, {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?',
    },
    {
        type: 'input',
        name: 'email', 
        message: 'What is the employees email?',
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the managers office number?',
    }
]) .then(({id, name, email, officeNum}) => {
    const manager = new Manager(id, name, email ,officeNum)
    console.log(manager);
})
} 
mainMenu()