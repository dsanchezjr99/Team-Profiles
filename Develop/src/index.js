//Where the data is inputted / added 

function template(data) {
    return `
      <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Profile</title>
      <link rel="styleshet" href="./style.css"
    </head>

    <body>
      <h1> Teams </h1>
      <div class="members">

        <div class="firstMember">

          <h2 class="title">${data[0].getRole()}</h2>
          <h4 class="name">Name: ${data[0].name}</h4>
          <h4>ID: ${data[0].getId()}</h4>
          <h4>Email: ${data[0].getEmail()}</h4>
          <h4>Office Number: ${data[0].getOfficeNumber()}</h4>

        </div>

        <div class="secondMember">

          <h2 class="title">${data[1].getRole()}</h2>
          <h4 class="name">Name: ${data[1].name}</h4>
          <h4>ID: ${data[1].getId()}</h4>
          <h4>Email: ${data[1].getEmail()}</h4>
          <h4>Github: ${data[1].getGithub()}</h4>

        </div>

        <div class="thirdMember">

          <h2 class="title">${data[2].getRole()}</h2>
          <h4 class="name">Name: ${data[2].name}</h4>
          <h4>ID: ${data[2].getId()}</h4>
          <h4>Email: ${data[2].getEmail()}</h4>
          <h4>School: ${data[2].getSchool()}</h4>

        </div>

        <div class="fourthMember">

          <h4 class="name"></h4>
          <h4 class="title"></h4>
          <div class="subDiv"></div>

        </div>

        <div class="fifthMember">

          <h4 class="name"></h4>
          <h4 class="title"></h4>
          <div class="subDiv"></div>
          
        </div>

      </div>
    </body>
  </html>
  `
  }


  module.exports = template;