import {
  students,
  availableMaleNames,
  availableFemaleNames,
  availableGenders,
} from "./data.js";

// ///// 1 - Show all students in table format.
// export function printTable() {
//   console.table(students);
//   return students;
// }
// printTable();

// /////2 - Show the number of students in class on the console.
// export function totalStudents() {
//   console.log(`There are ${students.length} students in class `);
//   return students.length;
// }
// totalStudents();

// /////3 - Show the console all the names of the students.

// export function studentsNames() {
//   return students.forEach((student) => {
//     console.log(`My name is: ${student.name}`);
//     return student.name;
//   });
// }
// studentsNames();

// /////4 - Eliminate the last student in class.
// export function isPopped() {
//   const popped = students.pop();
//   console.log("The last student has been eliminated: ", popped);
//   return popped;
// }
// isPopped();

// /////5 - Eliminate a student randomly from the class.
// export function randomEliminated() {
//   const randomStudent = Math.floor(Math.random() * students.length);
//   const result = students.splice(randomStudent, 1)[0];
//   console.log("A random student has been eliminated: ", result);
//   return result;
// }
// randomEliminated();

// /////6 - Show the console all the data of the students who are women.

// export function FemaleStudents() {
//   let females = students.filter((student) => student.gender == "female");

//   console.log("Women in class: ", females);
//   return females;
// }
// FemaleStudents();

// /////7 - Show the number of men and women in class on the console.
// export function MaleStudents() {
//   let males = students.filter((student) => student.gender == "male");
//   console.log(`There are ${males.length} men in class`);
//   return males;
// }
// MaleStudents();

// export function FemaleStudents_() {
//   let females = students.filter((student) => student.gender == "female");
//   console.log(`There are ${females.length} women in class`);
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

//   console.log(
//     "The students in the range of 20-25 years old are: ",
//     youngStudents
//   );
//   return youngStudents;
// }
// youngStudents();

// /////10 - Add a new student with the following information: Random name, random age between 20 and 50 years, random genre, empty list of qualifications.

// export function randomGender() {
//   return availableGenders[Math.floor(Math.random() * availableGenders.length)];
// }

// export function randomFemaleName() {
//   return availableFemaleNames[
//     Math.floor(Math.random() * availableFemaleNames.length)
//   ];
// }

// export function randomMaleName() {
//   return availableMaleNames[
//     Math.floor(Math.random() * availableMaleNames.length)
//   ];
// }

// export function randomAge(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// export const addStudent = (studentsArray) => {
//   const age = randomAge(20, 50);
//   const gender = randomGender();
//   const name = gender === "female" ? randomFemaleName() : randomMaleName();
//   const newStudent = {
//     age: age,
//     examScores: [],
//     gender: gender,
//     name: name,
//   };

//   return studentsArray.push(newStudent);
// };

// console.log("list before", students);

// addStudent(students);

// console.log("list after", students);

// /////11 - Display the name of the youngest student on the console.

// export function youngestStudent() {
//   const youngestStudent = students.reduce((accum, value) =>
//     accum.age < value.age ? accum : value
//   );
//   console.log("The youngest student is:", youngestStudent.name);
//   return youngestStudent;
// }

// youngestStudent();

// /////12 - Show the console the average age of all the students in class.

// export const calcAverage = () => {
//   const calcAverage = students.reduce((a, b) => a + b.age, 0) / students.length;
//   console.log("The age average is: ", calcAverage);
//   return calcAverage;
// };
// calcAverage();

// /////13 - Display the average age of the women on the console.

// export const totalWomen = () => {
//   const totalWomen = students.filter((student) => student.gender === "female");
//   const avgWomen =
//     totalWomen.reduce((a, b) => a + b.age, 0) / totalWomen.length;
//   console.log(Math.round(avgWomen));
//   return avgWomen;
// };

// totalWomen();

// /////14 - Add a new note to the students. For each student in class, we will have to calculate a note at random (number between 0 and 10) and add it to their list of notes.

// export function newNote() {
//   const min = 0;
//   const max = 10;
//   students.forEach(function (student) {
//     let score = Math.floor(Math.random() * (max - min) + min);
//     student.testScore.push([score]);
//     console.log(student);
//   });
// }
// newNote();

// /////15 - Order the array of students alphabetically according to their names.

// export const sortedNames = () => {
//   students.sort(function (a, b) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log("The students order alphabetically: ", students);
// };
// sortedNames();
