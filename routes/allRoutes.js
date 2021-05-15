const dotenv = require('dotenv');
// const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('../connection');
const functions2 = require('../server');
// const fs = require("fs");
// const path = require("path");
const express = require('express');
const { fetchAsyncQuestionPropertyQuestionProperty } = require('inquirer/lib/utils/utils');
// const PORT = process.env.DB_PORT || 3001;
const app = express();
const router = require('express').Router();
// const db = require('../server');
// const { fetchAsyncQuestionPropertyQuestionProperty } = require('inquirer/lib/utils/utils');
//Using express to thoroughly and properly use/"unpack" JSON objects
app.use(express.urlencoded({ extended: true }));


class functions{
viewAllEmployees() {
console.log("You have entered the view all employees function")
db.query('SELECT * FROM employee', function (err, results) {
    console.table(results); 
  });
}
    viewByDept() {
           console.log("you have entered the view by dept function!");
       }
       
    viewByManager() {
           console.log("you have entered the view by manager function!");
       }
       
    addEmployee() {
           console.log("you have entered the add employee function!");
       }
       
    deleteEmployee() {
           console.log("you have entered the delete employee function!");
       }
       
    updateRole() {
           console.log("you have entered the update role function!");
       }
       
    updateManager() {
           console.log("you have entered the update manager function!");
       }
       
    complete() {
           console.log("Have a good day. Goodbye!");
       }

}

module.exports = new functions();
