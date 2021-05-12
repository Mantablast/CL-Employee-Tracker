const dotenv = require('dotenv');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();
//Using express to thoroughly and properly use/"unpack" JSON objects
app.use(express.urlencoded({ extended: true }));

const router = require('express').Router();

function viewAllEmployees() {

}






module.exports = allRoutes;