// index.js
const inquirer = require('inquirer');
const {
  getAllDepartments,
  addDepartment,
  getAllRoles,
  addRole,
  getAllEmployees,
  addEmployee,
  updateEmployeeRole,
} = require('./employee-management-system/db/queries'); // Import queries from respective files

const mainMenu = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          getAllDepartments().then((departments) => {
            console.table(departments);
            mainMenu();
          });
          break;
        case 'View all roles':
          getAllRoles().then((roles) => {
            console.table(roles);
            mainMenu();
          });
          break;
        case 'View all employees':
          getAllEmployees().then((employees) => {
            console.table(employees);
            mainMenu();
          });
          break;
        case 'Add a department':
          promptAddDepartment();
          break;
        case 'Add a role':
          promptAddRole();
          break;
        case 'Add an employee':
          promptAddEmployee();
          break;
        case 'Update an employee role':
          promptUpdateEmployeeRole();
          break;
        case 'Exit':
          console.log('Exiting application...');
          process.exit();
      }
    });
};

const promptAddDepartment = () => {
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    })
    .then((answer) => {
      addDepartment(answer.name).then(() => {
        console.log(`Department '${answer.name}' added successfully!\n`);
        mainMenu();
      });
    });
};

// Implement other prompt functions for addRole, addEmployee, updateEmployeeRole similarly

// Start application
mainMenu();
