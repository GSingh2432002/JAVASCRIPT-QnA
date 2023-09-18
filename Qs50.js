//Write a function that takes a string and uses template literals to create a new string with the input string and a variable inserted into it.

const createString = (inputString, variable) => {
    // use template literals to create a new string with the input string and variable
    return `${inputString} ${variable}`;
};
  
// testing the function
console.log(createString("My name is", "Gaurav")); // expected output: 'My name is Pranay'
console.log(createString("Hello", "world!")); // expected output: 'Hello world!'
console.log(createString("The value is:", 123)); // expected output: 'The value is: 123'