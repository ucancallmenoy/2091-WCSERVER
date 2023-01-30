// Perez, Patrick M.
// WD - 201
var calculate = require('./calculations.js');

var rate = 300;
var hoursWorked = 4;
var days = 6;

var grossIncome = rate * hoursWorked * days;
var tax = calculate.multiply(grossIncome,0.1);
var sss = 1200;
var pagibig = 300;
var philhealth = 400;
var deduction = tax + sss + pagibig + philhealth;
var netSalary = calculate.subtract(grossIncome,deduction);

console.log();
console.log('Rate per Hour: ' + rate);
console.log('Hours Worked: ' + hoursWorked);
console.log('Days per Week: '+ days);
console.log();
console.log('Gross Income: ' + grossIncome);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-ibig fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total Deductions: ' + deduction);
console.log('The net salary is ' + netSalary);