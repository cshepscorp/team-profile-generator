const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require('fs');

let engineerCreated;
let internCreated;

const generateManagerCards = employeeArr => {
  return `
      ${employeeArr
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, officeNumber }) => {
          
          return `
          <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-subtitle mb-2 text-muted"><i class="fas fa-mug-hot"></i> Manager</h3>
              </div>
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                      <li class="list-group-item">Office #: ${officeNumber}</li>
                  </ul>
              </div>
          </div>
        `;
        })
        .join('')}
  `;
};
const generateEngineerCards = employeeArr => {
  return `
  ${employeeArr
      .filter(({ github }) => github)
      .map(({ name, id, email, github }) => {
        return `
        <div class="card employee-card">
          <div class="card-header">
          <h2 class="card-title">${name}</h2>
          <h3 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses"></i> Engineer</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                  <li class="list-group-item"><a href="https://github.com/${github}">Find me on GitHub: ${github}</a></li>
              </ul>
          </div>
      </div>
      `;
      })
      .join('')}
  `;
};
const generateInternCards = employeeArr => {
  return `
  ${employeeArr
      .filter(({ school }) => school)
      .map(({ name, id, email, school }) => {
        return `
        <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${name}</h2>
              <h3 class="card-subtitle mb-2 text-muted"><i class="fas fa-user"></i> Intern</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                  <li class="list-group-item">School: ${school}</li>
              </ul>
          </div>
      </div>
      `;
      })
      .join('')}
  `;
};
  
module.exports = templateData => {
    // destructure page data by section
    const { managers, engineers, interns } = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
      <header class="jumbotron">
        <h1 class="display-3">My Team</h1>
      </header>
      <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateManagerCards(managers)}
                ${generateEngineerCards(engineers)}
                ${generateInternCards(interns)}

            </div>
        </div>
      </div>

    </body>
    </html>
    `;
  };


// function engineerCreatedCard() {
//   if (github) {
//     return engineerCreated = generateEngineerCards(engineers);
//   }
// }
// function internCreatedCard() {
//   if (school) {
//     return internCreated = generateInternCards(interns);
//   }
// }

// engineerCreatedCard();
// internCreatedCard();