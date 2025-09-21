// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   location: string;
//   yearsOfExperience?: number;
//   [key: string]: any;
// }

// // Directors extends Teacher
// interface Directors extends Teacher {
//   numberOfReports: number;
// }


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// // Example usage
// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };

// console.log(director1);