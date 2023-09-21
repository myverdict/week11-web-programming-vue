// More examples https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

let cats = ["Hello Kitty", "Maru", "Garfield", "Soymilk", "Miles", "Meridith"];
console.log("1. Original cats array: ");
console.log(cats);

// Mapping - creating a new array built from elements of an existing array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let uppercaseCats = cats.map(function (cat) {
  return cat.toUpperCase();
});
console.log("\n2. uppercaseCats array using map: ");
console.log(uppercaseCats);
console.log("NOTE: Original cats array does not change.");

// Arrow function, full version
let uppercaseCats2 = cats.map((cat) => {
  return cat.toUpperCase();
});
console.log("\n3. uppercaseCats2 array using map & arrow function: ");
console.log(uppercaseCats2);
console.log("NOTE: Original cats array does not change.");

// more concise - one line, one argument, can omit () and {}. Return statement is implied.
let uppercaseCats3 = cats.map((cat) => cat.toUpperCase());
console.log("\n4. uppercaseCats3 array using map & arrow function (more concise): ");
console.log(uppercaseCats3);

console.log("\nNOTE: original cats array unchanged: ");
console.log(cats);

// number of character in each cat
let catNameLengths = cats.map(function (cat) {
  return cat.length;
});
console.log("\n5. catNameLengths array using map: ");
console.log(catNameLengths);

let catNameLengths2 = cats.map((cat) => {
  return cat.length;
});
console.log("\n6. catNameLengths2 array using map & arrow function: ");
console.log(catNameLengths2);

let catNameLengths3 = cats.map((cat) => cat.length);
console.log("\n7. catNameLengths3 array using map & arrow function (more concise): ");
console.log(catNameLengths3);

// Compare to the imperative method... (writing a loop)
let catNameLengths4 = [];
cats.forEach(function (cat) {
  let length = cat.length;
  catNameLengths4.push(length);
});
console.log("\n8. catNameLengths4 array using forEach loop: ");
console.log(catNameLengths4);

// Java or c# type for loop
let catNamesLengths5 = [];
for (let i = 0; i < cats.length; i++) {
  let length = cats[i].length;
  catNamesLengths5.push(length);
}
console.log("\n9. catNameLengths5 array using for loop: ");
console.log(catNamesLengths5);

console.log("\n");
console.log(cats);
let firstLetters = cats.map((cat) => cat[0]);
console.log("\n10. firstLetters array using map and arrow function (more concise): ");
console.log(firstLetters);

// Exercise: can you use map to create a new array with the last letter of each cat's name?
let lastLetters = cats.map((cat) => cat[cat.length - 1]);
console.log("\n11. lastLetters array using map and arrow function (more concise): ");
console.log(lastLetters);

console.log("\n");
console.log(cats);
let startsWithM = cats.map((cat) => {
  return cat[0] === "m" || cat[0] == "M";
});
console.log("\n12. startsWithM array using map and arrow function: ");
console.log(startsWithM);

// Exercise: can you use map to create a new array of boolean values;
// whether a cat's name is longer than 6 letters or not.
// For the example, the array will be [ true, false, true, true, false, true]
let namesLongerThanSixLetters = cats.map((cat) => {
  return cat.length > 6;
});
console.log("\n13. namesLongerThanSixLetters array using map and arrow function: ");
console.log(namesLongerThanSixLetters);

/***********************************************************************/
console.log("\n***************************************************************************");

let quizScores = [90, 100, 79, 81, 100, 40, 92, 64];
console.log("\n");
console.log("Quiz scores: ");
console.log(quizScores);

// filtering on arrays
let aGrades = quizScores.filter((score) => score >= 90);
console.log("\n14. aGrades array using filter on arrays and arrow notation: ");
console.log(aGrades);

let letterGrades = quizScores.map((score) => {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  return "F";
});
console.log("\n15. letterGrades array using map and arrow function: ");
console.log(letterGrades);

// Starts with [ { score: 90, grade: 'A' }  .... ]
let scoreAndLetterGrades = quizScores.map((score) => {
  if (score >= 90) {
    return { score: score, grade: "A" };
  }
  if (score >= 80) {
    return { score: score, grade: "B" };
  }
  if (score >= 70) {
    return { score: score, grade: "C" };
  }
  if (score >= 60) {
    return { score: score, grade: "D" };
  }
  return { score: score, grade: "F" };
});
console.log("\n16. scoreAndLetterGrades array of objects using map and arrow function with joined scores and letter grades: ");
console.log(scoreAndLetterGrades);

// filtering on objects
let aScoresAndGrade = scoreAndLetterGrades.filter(
  (scoreInfo) => scoreInfo.grade == "A"
);
console.log('\n17. aScoresAndGrade array of "A" grades using filter on objects and arrow function: ');
console.log(aScoresAndGrade);

// Note: shortcut assignment operator for objects.
let cat = "Meridith";
let owner = "Taylor Swift";
let catAndOwner = { cat, owner }; // Variable names become the keys
console.log("\n18. catAndOwner object creation (short hand): ");
console.log(catAndOwner); // { cat: 'Meridith', owner: 'Taylor Swift' }

// Note: long hand assignment operator for objects.
let cat2 = "Tinkerbell";
let owner2 = "Paris Hilton";
let catAndOwner2 = { cat: cat2, owner: owner2 };
console.log("\n19. catAndOwner2 object creation (long hand): ");
console.log(catAndOwner2); // { cat: 'Tinkerbell', owner: 'Paris Hilton' }

// Using that here
let scoreAndLetterGrades2 = quizScores.map((score) => {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Variable names become the keys. Return score & grade as an object
  return { score, grade }; // short hand
  // return { score: score, grade: grade }        // long hand
});
console.log("\n20. scoreAndLetterGrades2 array of objects & object creation (short hand): ");
console.log(scoreAndLetterGrades2);

// More useful array/object shortcuts: the spread operator, i.e., ...
let dogs = ["Einstein", "Marley", "Fly", "Max", "Scooby", "Zero"];
let pets = [...dogs, ...cats, "Kitty"]; // dogs first, cats second, Kitty last
// let pets = [ ...dogs, ...dogs ];         // everything repeats twice
// let pets = [ ...cats, ...dogs ];         // cats first, dogs second
console.log("\nArray of cats and array of dogs: ");
console.log(cats);
console.log(dogs);
console.log("\n21. pets array with cats & dogs in 1 array using the spread operator: ");
console.log(pets);

let pets1 = [cats, dogs];
console.log("\n22. pets1 array with cats array & dogs array (2 arrays): ");
console.log(pets1);

// Filtering: creates a new array, only if the condition is met
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith'];

let shortCatNames = cats.filter((cat) => cat.length < 6);
console.log("\n23. shortCatNames array with less than 6 characters using filter with an arrow function (short hand): ");
console.log(shortCatNames);

let shortCatNames2 = cats.filter(function (cat) {
  // this returns a boolean value
  // if true, cat is added to the array, else cat is not added
  return cat.length < 6;
});
console.log("\n24. shortCatNames array with less than 6 characters using filter with an arrow function (long hand): ");
console.log(shortCatNames2);

let namesStartingWithG = cats.filter((cat) => cat[0] === "g" || cat[0] === "G");
console.log("\n25. namesStartingWithG array using filter with an arrow function (short hand): ");
console.log(namesStartingWithG);

let namesStartingWithZ = cats.filter((cat) => cat[0] === "z" || cat[0] === "Z");
console.log("\n26. namesStartingWithZ array using filter with an arrow function (short hand): ");
console.log(namesStartingWithZ);

console.log("\nNOTE: original cats array unchanged: ");
console.log(cats); // original array is not changed.

// creating a function
function startsWithG(name) {
  // return name[0] === 'g' || name[0] === 'G';
  return name.toUpperCase().startsWith("G");
}

// using the function
let namesStartingWithG2 = cats.filter((cat) => startsWithG(cat));
console.log("\n27. namesStartingWithG2 array using filter with an arrow notation and another function: ");
console.log(namesStartingWithG2);

// another way of writing the above code
let namesStartingWithG3 = cats.filter(startsWithG);
console.log("\n28. namesStartingWithG3 array using filter and a function (more concise): ");
console.log(namesStartingWithG3);

// Filtering works with arrays of objects too
let students = [
  { name: "andy", starId: "aaaa", present: true },
  { name: "brian", starId: "bbbb", present: false },
  { name: "catherine", starId: "cccc", present: true },
  { name: "clara", starId: "ccc2", present: false },
  { name: "duncan", starId: "dddd", present: true },
  { name: "steve", starId: "ssss", present: false },
];

// Filter = make new array from only elements of existing array that meet a condition
let presentStudents = students.filter((student) => student.present);
console.log("\n29. presentStudents array of objects using filter and arrow notation: ");
console.log("Who is here?", presentStudents);

// Exercise: can you use filter to create an array of students who are NOT present?
let absentStudents = students.filter((student) => !student.present);
console.log("\n30. absentStudents array of objects using filter and arrow notation: ");
console.log("Who is not here?", absentStudents);

// Filter - remove students meeting a condition
let everyoneButClara = students.filter((student) => student.name != "clara");
console.log("\n31. everyoneButClara array using filter and arrow notation (short form): ");
console.log(everyoneButClara); // bye!

// If we have an example student, using a variable
let brian = students[1];
// Can remove with filter
let everyoneButBrian = students.filter((student) => student != brian);
console.log("\n32. everyoneButBrian array using filter and arrow notation (short form): ");
console.log(everyoneButBrian);

let everyoneButDuncan = students.filter(function (student) {
  return student.name != "duncan";
});
console.log("\n33. everyoneButDuncan array using filter with function notation (long form): ");
console.log(everyoneButDuncan);

// QUESTION: when mapping and filtering, does the original array change?
// ANSWER: when mapping and filtering, the original array does not change.

let onlyLetterC = students.filter((student) => student.name.startsWith("c"));
console.log("\n34. onlyLetterC students array using filter with arrow notation: ");
console.log(onlyLetterC);

// Combine map and filter - get names of present students
let presentStudentNames = students
  .filter((student) => student.present) // filtered an array of objects for students present
  .map((student) => student.name); // mapped from that array of student names
console.log("\n35. presentStudentNames array of strings from objects using filter & map with arrow notation: ");
console.log(presentStudentNames); // [ 'andy', 'catherine', 'duncan' ]

// Exercise: think about how you would do this with a loop?
let presentStudentNames1 = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].present) {
    presentStudentNames1.push(students[i].name);
  }
}
console.log("\n36. presentStudentNames1 array of strings from objects using a for loop: ");
console.log(presentStudentNames1); // [ 'andy', 'catherine', 'duncan' ]

// Exercise: can you create an array of starIDs of students who are NOT present?
let absentStudentStarIds = students
  .filter((student) => !student.present)
  .map((student) => student.starId);
console.log("\n37. absentStudentStarIds array of strings from objects using filter & map with arrow notation: ");
console.log(absentStudentStarIds); // [ 'bbbb', 'ccc2', 'ssss' ]

// Spread operator works with arrays and objects too.
// So, if there's another class,
let moreStudents = [
  { name: "justin", starId: "jjj", present: true },
  { name: "mary", starId: "mmm", present: false },
];
console.log("\nStudents array and more students array: ");
console.log(students);
console.log(moreStudents);

let everyone = [...students, ...moreStudents];
console.log("\n38. everyone array of students with new students added in order using the spread operator: ");
console.log(everyone);

// And with an object, can be used to copy an object into a new object and add/edit properties,
let student = { name: "daniel", starId: "ddd", present: true };

// using the spread operator to create a new object from an existing object, plus a new attribute
let studentPlusEmail = { ...student, email: "daniel@school.edu" };
console.log("\n39. studentPlusEmail using the spread operator: ");
console.log(studentPlusEmail);

// Equivalent to either of these
student.email = "daniel@school.edu";
student["email"] = "daniel@school.edu";

// Modify attributes using the spread operator
let studentChangedStarId = { ...student, starId: "eee" }; // make sure any attributes you change are at the end
console.log("\n40. studentChangedStarId using the spread operator: ");
console.log(studentChangedStarId);

// Use spread to combine operators: Another example object
let studentClassReg = { 1150: true, 2560: false };
// Combine two or more objects using spread operator
let studentAndReg = { ...student, ...studentClassReg };
console.log("\n41. studentAndReg using spread to combine operators: ");
console.log(studentAndReg);

// Similar functions: find returns the first match
let steve = students.find((student) => student.name === "steve");
console.log("\n42. steve using find (found), returns the first match: ");
console.log("steve", steve); // { name: 'steve', starId: 'sss', present: false }

let beyonce = students.find((student) => student.name === "beyonce");
console.log("\n43. beyonce using find (not found): ");
console.log("beyonce", beyonce); // undefined

// using includes
let beyonce2 = students.includes((student) => student.name === "beyonce2");
console.log("\n44. beyonce2 using includes (does not include): ");
console.log("beyonce2", beyonce2); // false

// every returns true if all of the items match a condition. Is everyone here?
let isEveryoneHere = students.every((student) => student.present);
console.log("\n45. isEveryoneHere using every: ");
console.log("Is everyone here? " + isEveryoneHere);

// Let's use map to get everyone here! (making everyone present to true)
let everyoneIsHere = students.map((student) => {
  return { ...student, present: true };
});
console.log("\n46. everyoneIsHere using spread & map to make everyone present to true: ");
console.log(everyoneIsHere);

let isEveryoneHere2 = everyoneIsHere.every((student) => student.present);
console.log("\n47. isEveryoneHere2 using every: ");
console.log("Is everyone here? " + isEveryoneHere2);

let starIDlength = students.every((student) => student.starId.length >= 3);
console.log("\n48. starIDlength using every: ");
console.log("Every star ID long enough?", starIDlength); // true
