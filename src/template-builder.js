const BuildTeam = team => {
  const renderManager = (manager) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.managerName}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.managerId}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
    </div>
    `
  }

  const renderEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.engineerName}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
        </ul>
    </div>
    </div>
    `
  }

  const renderIntern = (intern) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.internName}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    </div>
    `
  }

  const html = [];
​
  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager)).join("")
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer)).join("")
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern)).join("")
  );
​
  return renderMain(html.join(""));
}


  module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${BuildTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `
  }