const dotenv = require('dotenv');
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// const fs = require("fs");
const path = require("path");
const app = express()
//Using express to thoroughly and properly use/"unpack" JSON objects
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
const routes = require('./routes/allRoutes');
const { env } = require('process');
const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'employees_db'
})
connection.connect(function(err){
    if (err) throw err;
    options();
})

const CFonts = require('cfonts');
CFonts.say('Employee | Manager', {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['magenta', 'cyan'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: true,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: true,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});

const questions1 = () => {
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
  ]).then(function (selection){
    //Depending on answer, send to appropriate function to handle request
    switch (selection.userchoice) {
    case "View all employees":
        allRoutes.viewAllEmployees();
        break 
    case "View all employees By Department":
        allRoutes.viewByDept();
        break
    case "View all employees By Manager":
        allRoutes.viewByManager();
        break
    case "Add employee":
        allRoutes.addEmployee();
        break
    case "Remove employee":
        allRoutes.deleteEmployee();
        break
    case "Update employee role":
        allRoutes.updateRole();
        break
    case "Update employee manager":
        allRoutes.updateManager();
        break
    case "All done for today.":
        allRoutes.complete();
        break
    }
  })
};


module.exports = router;
app.listen(PORT, () => console.log("Server listening on port " + PORT));