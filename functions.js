import { students } from "./data.js";

// // // 1 - Mostrar en formato de tabla todos los alumnos.
// export function printTable() {
//   console.table(students);
// }
// printTable();

// // // // 2- Mostrar por consola la cantidad de alumnos que hay en clase.
// export function totalStudents() {
//   console.log(students.length);
// }
// totalStudents();

// // // // 3- Mostrar por consola todos los nombres de los alumnos.

// export function studentsNames() {
//   students.forEach((student) => {
//     console.log(student.name);
//   });
// }
// studentsNames();

// // // 4- Eliminar el último alumno de la clase.
// export function isPopped() {
//   const popped = students.pop();
//   console.log(popped);
// }
// isPopped();

// // 5- Eliminar un alumno aleatoriamente de la clase
// export function randomEliminated() {
//   const randomStudent = Math.floor(Math.random() * students.length);
//   const result = students.splice(randomStudent, 1)[0];
//   console.log(result);
// }
// randomEliminated();

// // 6-Mostrar por consola todos los datos de los alumnos que son chicas.

// export function FemaleStudents() {
//   let females = students.filter((student) => student.gender == "female");

//   console.log(females);
// }
// FemaleStudents();

// // // 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
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

// // 8 - Mostrar true o false por consola si todos los alumnos de la clase son chicas.
// export function isFemale() {
//   console.log(students.map((student) => student.gender).includes("female"));
// }
// isFemale();

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
