// node stuff
const inquirer = require('inquirer');
const fs = require('fs');

// team constructors
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// create page with employee profiles
const generatePage = require('./src/page-template.js');

// empty array to hold team member data
const teamMemberArr = [];

// prompt manager with questions about themselves
const promptManager = managerData => {
    // team manager’s name, employee ID, email address, and office number
    console.log(`
    =======================
    All fields are required
    =======================
    `);
    if (!teamMemberArr.managers) {
        teamMemberArr.managers = [];
      }
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
            // validate: email => {
            //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            //   if (valid) {
            //     return true;
            //   } else {
            //     console.log('Please enter a email address');
            //     return false;
            //   }
            // }
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
      .then(managerData => {
        // team manager’s name, employee ID, email address, and office number
        teamMemberArr.managers.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber));
        console.log(teamMemberArr.managers);
        console.log(teamMemberArr);
      });
};

const promptManagerNext = () => {
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'managersChoice',
            message: 'Which would you like to do? Add an engineer, add an intern or finish building my team.',
            choices: ['Engineer', 'Intern', 'My team is complete'],
          }
      ])
      .then(nextSteps => {
        switch(nextSteps.managersChoice) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            //case 'My team is complete':
            default:
            // generate the team
                generateTeam();
                // console.log(teamMemberArr);
                // writeToFile('dist/index.html', generatePage(teamMemberArr));
                break;
        }
      });

};


const createEngineer = engineerData => {
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `);
    if (!teamMemberArr.engineers) {
        teamMemberArr.engineers = [];
      }
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: "What is the engineer's name?",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a valid name');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter their GitHub Username',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter a GitHub username');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter a valid employee ID!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter their email address');
                return false;
              }
            }
          }
        ])
        // push team member into an array
        .then(engineerData => {
            teamMemberArr.engineers.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github));
            console.log(teamMemberArr.engineers);
            console.log(teamMemberArr);
            promptManagerNext();
        });  
};

const createIntern = internData => {
    console.log(`
    ================
    Add a New Intern
    ================
    `);
    if (!teamMemberArr.interns) {
        teamMemberArr.interns = [];
      }
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: "What is the intern's name?",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a valid name');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter their school',
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Please enter a school name');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter a valid employee ID!');
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter their email address');
                return false;
              }
            }
          }
        ])
        // push team member into an array
        .then(internData => {
            teamMemberArr.interns.push(new Intern(internData.name, internData.id, internData.email, internData.school));
            console.log(teamMemberArr.interns);
            console.log(teamMemberArr);
            promptManagerNext();
        });  
};

function generateTeam() {
    writeToFile('dist/index.html', generatePage(teamMemberArr));
    console.log(`writeToFile function executed`);

};

promptManager()
         .then(promptManagerNext)
//     // .then(teamMemberArr => {
//     //     // finished portfolio data object is returned as portfolioData
//     //     // and sent into the generatePage() function
//     //     return generatePage(teamMemberArr);
//     // })

    .catch(err => {
        console.log(err);
});

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Your team profile page has been saved! Go to the /dist folder to find the index.html file')
    });
    copyFile();
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
    });
  });
};