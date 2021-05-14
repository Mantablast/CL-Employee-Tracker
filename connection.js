// const dotenv = require('dotenv');
// const { env } = require('process');
var mysql = require('mysql2');
config = {
   host: 'localhost',
   user: 'root',
   password: 'password',
   database: 'employee_db'
}
var connection =mysql.createConnection(config); //added the line
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports ={
     connection : mysql.createConnection(config) 
} 
