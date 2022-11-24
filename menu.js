import readline from "readline"; // https://nodejs.org/api/readline.html

import { printTable, totalStudents, studentsNames } from "./functions.js";
import {
  students,
  availableMaleNames,
  availableFemaleNames,
  availableGenders,
} from "./data.js";

// GET USERS CHOICE
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Type in the number of your option (1-17):", (input) => {
  let result;
  switch (input) {
    case "1":
      console.log("the list of student formatted as table:");
      printTable();
      break;
    case "2":
      result = totalStudents();
      console.log("the total length of student is:", result);
      break;
    case "3":
      console.log("Show the console all the names of the students");
      studentsNames();
      break;
    default:
      rl.close();
  }

  // END
  rl.close();
});
