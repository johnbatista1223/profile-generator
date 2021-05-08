const inquirer = require('Inquirer');
const fs = require('fs');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');
const employeeCardString ='';

//manager
function addManager(){
inquirer.prompt([
  {
      type: "input",
      message: "Enter manager's name:",
      name: "name",
  },
  {
      type: "input",
      message: "Enter manager's ID:",
      name: "id",
  },
  {
      type: "input",
      message: "Enter manager's email:",
      name: "email",
  },
  {
      type: "input",
      message: "Enter manager's office number:",
      name: "officeNumber",
  },   
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern",'i dont want to add anyone else'],
    name: "title"
  }
]).then(answers => {
  console.log(answers)
  const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
  const renderedManager = managerHtml(newManager);
  const renderedTemplate = renderTemplate(renderedManager);
  fs.writeFileSync('./renderedTemplate.html', renderedTemplate);
})
let managerHtml = (newManager) =>{
  const renderHtml = 
  `<div class="card  bg-info justify-content-center align-items-center" style="width: 18rem;">
  <div class="col card-header">
    <h4>Manager</h4>
  </div>

  <div class="col card-header">
    <h4>${newManager.name}</h4>
  </div>

  <ul class="list-group list-group-flush text">
    <li class="list-group-item">ID:${newManager.id}</li>
    <li class="list-group-item">Email:${newManager.email} </li>
    <li class="list-group-item"> office number:${newManager.officeNumber} </li>
  </ul>

</div>`
return renderHtml 
}
 function renderTemplate(employeeCards) {
const newTemplate = 
`<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <title>Document</title>

  <style>
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .card {
      border-radius: 6px;
      background-color: white;
      color: lightskyblue;
      margin: 10px;
    }

    .text {
      padding: 20px;
      border-radius: 2px;
      background-color: lightskyblue;
      color: black;
      margin: 15px;
    }

    .col {
      flex: 1;
      text-align: center;
    }
  </style>
</head>

<body>
  <nav class="navbar navbar-dark bg-info justify-content-center align-items-center">
    <span class="navbar-brand mb-0 h1">
      <h1>My Team</h1>
    </span>
  </nav>
  <div class="row">
  ${employeeCards}

    

  </div>

</body>

</html>`
return newTemplate
 }
}


//engineer
function addEngineer()
{
 inquirer.prompt([
  {
      type: "input",
      message: "Enter engineer's name:",
      name: "name",
  },
  {
      type: "input",
      message: "Enter engineer's ID:",
      name: "id",
  },
  {
      type: "input",
      message: "Enter engineer's email:",
      name: "email",
  },
  {
      type: "input",
      message: "Enter engineer's office number:",
      name: "officeNumber",
  },   
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern",'i dont want to add anyone else'],
    name: "title"
  }
]).then(answers => {
  console.log(answers)
  const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
  const renderedEngineer = engineerHtml(newEngineer);
  const renderedTemplateEngineer = renderTemplate(renderedEngineer);
  fs.writeFileSync('./renderedTemplate.html', renderedTemplateEngineer);
})
let engineerHtml = (newEngineer) =>{
  const renderHtml = 
  `<div class="card  bg-info justify-content-center align-items-center" style="width: 18rem;">
  <div class="col card-header">
    <h4>Manager</h4>
  </div>

  <div class="col card-header">
    <h4>${newEngineer.name}</h4>
  </div>

  <ul class="list-group list-group-flush text">
    <li class="list-group-item">ID:${newEngineer.id}</li>
    <li class="list-group-item">Email:${newEngineer.email} </li>
    <li class="list-group-item"> github:${newEngineer.github} </li>
  </ul>

</div>`
return renderHtml 
}
}

//intern
function addIntern(){
  inquirer.prompt([
  {
      type: "input",
      message: "Enter intern's name:",
      name: "name",
  },
  {
      type: "input",
      message: "Enter intern's ID:",
      name: "id",
  },
  {
      type: "input",
      message: "Enter intern's email:",
      name: "email",
  },
  {
      type: "input",
      message: "Enter intern's office number:",
      name: "officeNumber",
  },   
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern",'i dont want to add anyone else'],
    name: "title"
  }
]).then(answers => {
  console.log(answers)
  const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
  const renderedIntern = internHtml(newIntern);
  const renderedTemplateIntern = renderTemplate(renderedIntern);
  fs.writeFileSync('./renderedTemplate.html', renderedTemplateIntern);
})
let internHtml = (newIntern) =>{
  const renderHtml = 
  `<div class="card  bg-info justify-content-center align-items-center" style="width: 18rem;">
  <div class="col card-header">
    <h4>Manager</h4>
  </div>

  <div class="col card-header">
    <h4>${newIntern.name}</h4>
  </div>

  <ul class="list-group list-group-flush text">
    <li class="list-group-item">ID:${newIntern.id}</li>
    <li class="list-group-item">Email:${newIntern.email} </li>
    <li class="list-group-item"> School:${newIntern.school} </li>
  </ul>

</div>`
return renderHtml 
}
}

function addTeam(){

}


addManager();