
    const generateManagerCard = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${manager.name}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.officeNum}</li>
          <a href="${manager.email}" li class="list-group-item">${manager.email}</a>
        </ul>
      </div>

        `
    }
  
    const generateEngineerCard = engineer => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${engineer.name}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.gitHub}</li>
        <a href="${engineer.email}" li class="list-group-item">${engineer.email}</a>
      </ul>
    </div>

      `
  }

  const generateInternCard = intern => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">${intern.name}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item">${intern.school}</li>
      <a href="${intern.email}" li class="list-group-item">${intern.email}</a>
    </ul>
  </div>

    `
}


const insertCards = (team) => {
  const html = [];
  console.log(team);
  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager)).join('')
)
html.push(team
  .filter(employee => employee.getRole() === "Engineer")
  .map(engineer => generateEngineerCard(engineer)).join('')
)
html.push(team
  .filter(employee => employee.getRole() === "Intern")
  .map(intern => generateInternCard(intern)).join('')
)
  return html.join("")
}



const renderTeam = (teamMemberObjArr) => {

    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <link rel="stylesheet" href="./style.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Open+Sans&display=swap" rel="stylesheet">
    <title>Employee Extender</title>
  </head>
  <body>
  <header>
    <h3>My Team</h3>
  </header>

  
  <main class="container" style='border: 1px solid black; display: flex; justify-content: space-between; flex-direction:wrap; '>
    ${insertCards(teamMemberObjArr)}
  </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  </body>
</html>
`
}

export default renderTeam