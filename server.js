// const CFonts = require('cfonts');
// CFonts.say('Employee | Manager', {
// 	font: 'block',              // define the font face
// 	align: 'left',              // define text alignment
// 	colors: ['magenta', 'cyan'],         // define all colors
// 	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
// 	letterSpacing: 1,           // define letter spacing
// 	lineHeight: 1,              // define the line height
// 	space: true,                // define if the output text should have empty lines on top and on the bottom
// 	maxLength: '0',             // define how many character can be on one line
// 	gradient: true,            // define your two gradient colors
// 	independentGradient: false, // define if you want to recalculate the gradient for each new line
// 	transitionGradient: true,  // define if this is a transition between colors directly
// 	env: 'node'                 // define the environment CFonts is being executed in
// });

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
