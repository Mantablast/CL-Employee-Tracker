const dotenv = require('dotenv');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const router = require('express').Router();
//Using express to thoroughly and properly use/"unpack" JSON objects
app.use(express.urlencoded({ extended: true }));



function viewAllEmployees() {
 console.log("you have entered the view all function!");
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



module.exports = router;