const dotenv = require('dotenv');
const { env } = require('process');
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const router = require('express').Router();
// const fs = require("fs");
// const path = require("path");
const app = express();
const functions = require("./routes/allRoutes");
//Using express to thoroughly and properly use/"unpack" JSON objects
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.DB_PORT || 3001;
const db = mysql.createConnection(
  {
    host: 'localhost',
    port: PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DATABASE_NAME
  }
);
db.connect(function (err) {
  if (err) throw err;
 })

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

const questions = () => {
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
        functions.viewAllEmployees();
        break
    case "View all employees By Department":
      functions.viewByDept();
        break
    case "View all employees By Manager":
      functions.viewByManager();
        break
    case "Add employee":
      functions.addEmployee();
        break
    case "Remove employee":
      functions.deleteEmployee();
        break
    case "Update employee role":
      functions.updateRole();
        break
    case "Update employee manager":
      functions.updateManager();
        break
    case "All done for today.":
      functions.complete();
        break
    }
  })
};

questions();
module.export = db
// sequelize.sync({ force: false }).then(() => {
//   app.listen(process.env.DB_PORT, () => console.log('Now listening'));
// });
app.listen(PORT, () => console.log("Server listening on port " + PORT));
