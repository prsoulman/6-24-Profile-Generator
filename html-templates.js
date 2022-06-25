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






}