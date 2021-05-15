const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const router = require('express').Router();
const connect = require('./connection');
const app = express();
const functions = require("./routes/allRoutes");
const db = require('./connection');
//Using express to thoroughly and properly use/"unpack" JSON objects
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;

const CFonts = require('cfonts');
CFonts.say('Employee | Manager', {
  font: 'block',
  align: 'left',
  colors: ['magenta', 'cyan'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
  gradient: true,
  independentGradient: false,
  transitionGradient: true,
  env: 'node'
});


var questions = () => {
    inquirer.prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "userchoice",
        choices: [
          "View all employees",

          "View all employees By Department",

          "View all employees By Manager",

          "Add employee",

          "Remove employee",

          "Update employee role",

          "Update employee manager",

          "All done for today.",
        ],
      },
    ]).then(function (selection) {
      //Depending on answer, send to appropriate function to handle request
      switch (selection.userchoice) {
        case "View all employees":
          viewAllEmployees();
          break
        case "View all employees By Department":
          viewByDept();
          break
        case "View all employees By Manager":
          viewByManager();
          break
        case "Add employee":
          addEmployee();
          break
        case "Remove employee":
          deleteEmployee();
          break
        case "Update employee role":
          updateRole();
          break
        case "Update employee manager":
          updateManager();
          break
        case "All done for today.":
          complete();
          break
      }
    })
  };


function viewAllEmployees() {
  console.log("You have entered the view all employees function")
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    questions();
  });
}
function viewByDept() {
  console.log("you have entered the view by dept function!");
}

function viewByManager() {
  console.log("you have entered the view by manager function!");
}

function addEmployee() {
  console.log("you have entered the add employee function!");
}

function deleteEmployee() {
  console.log("you have entered the delete employee function!");
}

function updateRole() {
  console.log("you have entered the update role function!");
}

function updateManager() {
  console.log("you have entered the update manager function!");
}

function complete() {
  console.log("Have a good day. Goodbye!");
}





questions();


// sequelize.sync({ force: false }).then(() => {
//   app.listen(process.env.DB_PORT, () => console.log('Now listening'));
// });
app.listen(PORT, () => console.log("Server listening on port " + PORT));
