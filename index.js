const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');

const promptManager = () => {
    // team manager’s name, employee ID, email address, and office number
    console.log(`
    =======================
    All fields are required
    =======================
    `);
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter your employee ID!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address');
                return false;
              }
            }
          },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office ID?',
          validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log('Please enter your office ID');
              return false;
            }
          }
        }

      ])
      .then(managerInput => {
          const { name, id, email, officeNumber } = managerInput;
      });
      //promptManagerNext();
};

const promptManagerNext = () => {
    // team manager’s name, employee ID, email address, and office number
    return inquirer.prompt([
        {
            type: 'list',
            name: 'managersChoice',
            message: 'Which would you like to do? Add an engineer, add an intern or finish building my team.',
            choices: ['Engineer', 'Intern', 'My team is complete'],
          }
      ]).then(nextSteps => {
        switch(nextSteps.managersChoice) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            case 'My team is complete':
                createTeam();
                break;
        }
      });

};


const promptEmployee = () => {
    console.log(`
    =================
    Add a New Project
    =================
    `);

};

promptManager()
    .then(promptManagerNext)
    .then()


// const Employee = require('./lib/Employee');

// new Employee().initializeEmployee();