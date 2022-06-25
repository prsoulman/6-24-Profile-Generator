const makeTeam = team => {

    const generateManagerCard = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${manager.name}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.officeNum}m</li>
          <a href="${manager.email}" li class="list-group-item">${manager.email}</a>
        </ul>
      </div>

        `
    }
    
    const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
)

return html.join("")


module.exports= teamHtml => {
    return '
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <link rel="stylesheet" href="./style.css"/>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Employee Extender</title>
  </head>

  <header>
    <h3>My Team</h3>
  </header>

  <body>
    ${makeTeam(team)}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  </body>
</html>
`
}