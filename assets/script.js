// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  //create objects within your array
  const employeeData = [];
  let employeeAdd = true;

  //Create while loop to cycle through employee data input. Exit out of prompt if user presses cancel.
  while (employeeAdd) {
    const firstName = prompt("Enter First Name: ");
    let lastName = prompt("Enter Last Name: ");
    //parse int to turn string to number
    const salary = parseInt(prompt("Enter employee salary: "));

    //Create format of object
    let newEmployee = {
      firstName,
      lastName,
      salary,
    };

    //push the object to the end of the array
    employeeData.push(newEmployee);

    //after collecting data see if the user would like to input more employees
    const continueData = confirm("Would you like to add another employee?");
    if (!continueData) {
      employeeAdd = false;
    }
  }
  //return the user input array
  return employeeData;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Calculate and display the average salary
  //Sum of salaries
  let total = 0;
  //Number of salaries within the data set
  let numberInputs = 0;
  //Variable that stores calculated average
  let average = 0;
  //Variable to clean up calculated average - only displays two decimal points
  let totalFormated = 0;

  //Run through each object within the array and add the salaries
  for (i = 0; i < employeesArray.length; i++) {
    let salaryNum = employeesArray[i].salary;

    total += salaryNum;
    numberInputs++;
  }
  //only run if there are more than one input
  if (numberInputs > 0) {
    //calc average
    average = total / numberInputs;
    //calc average to two decimal places
    totalFormated = average.toFixed(2);
    //use template literal to make console display more readable
    console.log(`Average employee salary: ${totalFormated}`);
  } else {
    console.log("undefined");
  }
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  //Select and display a random employee

  //generate random index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  //create variable that stores the random object
  const randomObject = employeesArray[randomIndex];
  //log random employee first and last name to console
  console.log(
    `Congratulations to ${randomObject.firstName} ${randomObject.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
