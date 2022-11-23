import {
  students,
  availableMaleNames,
  availableFemaleNames,
  availableGenders,
} from "./data.js";

// ///// 1 - Show all students in table format.
// export function printTable() {
//   console.table(students);
// }
// printTable();

// /////2 - Show the number of students in class on the console.
// export function totalStudents() {
//   console.log(students.length);
// }
// totalStudents();

// /////3 - Show the console all the names of the students.

export function studentsNames() {
  return students.forEach((student) => {
    return student.name;
  });
}
studentsNames();

// /////4 - Eliminate the last student in class.
// export function isPopped() {
//   const popped = students.pop();
//   console.log(popped);
// }
// isPopped();

// /////5 - Eliminate a student randomly from the class.
// export function randomEliminated() {
//   const randomStudent = Math.floor(Math.random() * students.length);
//   const result = students.splice(randomStudent, 1)[0];
//   console.log(result);
// }
// randomEliminated();

// /////6 - Show the console all the data of the students who are women.

// export function FemaleStudents() {
//   let females = students.filter((student) => student.gender == "female");

//   console.log(females);
// }
// FemaleStudents();

// /////7 - Show the number of men and women in class on the console.
// export function MaleStudents() {
//   let males = students.filter((student) => student.gender == "male");

//   console.log(`There are ${males.length} male students`);
// }
// MaleStudents();

// export function FemaleStudents_() {
//   let females = students.filter((student) => student.gender == "female");
//   console.log(`There are ${females.length} students women`);
// }
// FemaleStudents_();

// /////8 - Show true or false by console if all the students in class are women.
// export function isFemale() {
//   console.log(students.map((student) => student.gender).includes("female"));
// }
// isFemale();

// /////9 - Show the names of the students who will be between 20 and 25 years old on the console.

// export function youngStudents() {
//   let youngStudents = students.filter(
//     (student) => student.age >= 20 && student.age <= 25
//   );

//   console.log(youngStudents);
// }
// youngStudents();

// /////10 - Add a new student with the following information: Random name, random age between 20 and 50 years, random genre, empty list of qualifications.

export function generateGender() {
  return availableGenders[Math.floor(Math.random() * availableGenders.length)];
}

export function addFemaleName() {
  return availableFemaleNames[
    Math.floor(Math.random() * availableFemaleNames.length)
  ];
}

export function addMaleName() {
  return availableMaleNames[
    Math.floor(Math.random() * availableMaleNames.length)
  ];
}

const womemName = addFemaleName();
const maleName = addMaleName();

console.log(womemName);
console.log(maleName);
