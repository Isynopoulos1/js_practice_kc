import readline from "readline"; // https://nodejs.org/api/readline.html

import {
  printTable,
  totalStudents,
  studentsNames,
  isPopped,
  randomEliminated,
  FemaleStudents,
  FemaleStudents_,
  MaleStudents,
  isFemale,
  youngStudents,
  randomGender,
  randomFemaleName,
  randomMaleName,
  randomAge,
  addStudent,
  youngestStudent,
  calcAverage,
  totalWomen,
  newNote,
  sortedNames,
  bestScore,
  averageNote,
} from "./functions.js";
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
  let result2;
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
    case "4":
      result = isPopped();
      console.log("Eliminate the last student in class", result);
      break;
    case "5":
      result = randomEliminated();
      console.log("Eliminate a student randomly from the class.", result);
      break;
    case "6":
      result = FemaleStudents();
      console.log(
        "Show the console all the data of the students who are women.",
        result
      );
      break;
    case "7":
      result = FemaleStudents_();
      result2 = MaleStudents();
      console.log(
        "Show the console all the data of the students who are women.",
        result,
        "and the men are",
        result2
      );
      break;
    case "8":
      result = isFemale();
      console.log(
        "8 - Show true or false by console if all the students in class are women.",
        result
      );
      break;
    case "9":
      result = youngStudents();
      console.log(
        "9 - Show the names of the students who will be between 20 and 25 years old on the console.",
        result
      );
      break;
    case "10":
      result = addStudent(students);
      console.log(
        "10 - Add a new student with the following information: Random name, random age between 20 and 50 years, random genre, empty list of qualifications. ",
        result
      );
      break;
    case "11":
      result = youngestStudent();
      console.log(
        "11 - Display the name of the youngest student on the console. ",
        result
      );
      break;
    case "12":
      result = calcAverage();
      console.log(
        "12 - Show the console the average age of all the students in class.",
        result
      );
      break;
    case "13":
      result = totalWomen();
      console.log(
        "13 - Display the average age of the women on the console.",
        result
      );
      break;
    case "14":
      result = newNote();
      console.log(
        "14 - Add a new note to the students. For each student in class, we will have to calculate a note at random (number between 0 and 10) and add it to their list of notes.",
        result
      );
      break;
    case "15":
      result = sortedNames();
      console.log(
        "15 - Order the array of students alphabetically according to their names.",
        result
      );
      break;
    case "16":
      result = bestScore();
      console.log(
        "16 - Show the student of the class with the best grades on the console .",
        result
      );
      break;
    case "17":
      result = averageNote();
      console.log(
        `17- Display on the console the highest average grade of the class and the name of the student to whom it belongs:`,
        result.name,
        "with a score of",
        result.score
      );
      break;

    default:
      rl.close();
  }

  // END
  rl.close();
});
