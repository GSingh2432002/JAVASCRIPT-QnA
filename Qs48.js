//Write a function that takes an array of strings and returns a new array with all the strings in uppercase.

const toUpperCase = (strings) => {
    // use Array.map() to create a new array with the uppercase versions of the strings
    return strings.map((string) => string.toUpperCase());
};
  
// testing the function
console.log(toUpperCase(["Gaurav", "Singh"])); 
console.log(toUpperCase(["hello", "world"])); 
console.log(toUpperCase(["abc", "DEF", "gHi"])); 