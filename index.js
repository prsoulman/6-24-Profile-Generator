import inquirer from 'inquirer';
import fs from 'fs'; 
import Manager from './lib/Manager.js'
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
//import Employee from './lib/employee.js';

const renderTeam=require('./lib/html-templates.js');

const teamMemberObjArr = []

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
        } else if (Direction==='Engineer') {
            askEngineer()
        } else if (Direction==='Intern') {
            askIntern()
        }else if (Direction==='Build Team') {
            buildTeam()
        }else {
            console.log('Done')
        }
        
    }); 
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
    teamMemberObjArr.push(manager)

    mainMenu()
})

} 


const askEngineer = () => {
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
        name: 'gitHub',
        message: 'What is your GitHub URL?',
    }
]) .then(({id, name, email, gitHub}) => {
    const engineer = new Engineer (id, name, email ,gitHub)
    console.log(engineer);
    teamMemberObjArr.push(engineer)
    mainMenu()
})
} 

const askIntern = () => {
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
        name: 'school',
        message: 'What is the name of your school?',
    }
]) .then(({id, name, email, school}) => {
    const intern = new Intern (id, name, email ,school)
    console.log(intern);
    teamMemberObjArr.push(intern)
    mainMenu()
});

const buildTeam = () => {
    fs.writeFile("./dist/index/html", renderTeam(teamMemberObjArr), 'utf-8')
}


} 
mainMenu()


