//Write a function that takes a string as input and returns true if the string is a valid email address, false otherwise.

function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  console.log(isValidEmail("gsingh332211@gmail.com")); 
  console.log(isValidEmail("example@example.com")); 
  console.log(isValidEmail("example.example@example.com")); 
  console.log(isValidEmail("example-example@example.com")); 
  console.log(isValidEmail("example@example.co.in")); 
  console.log(isValidEmail("example123@example.com"));
  console.log(isValidEmail("example@.com")); 
  console.log(isValidEmail("example@example.")); 
  console.log(isValidEmail("example@examplecom")); 
  console.log(isValidEmail("example@examplecom.")); 
  console.log(isValidEmail("example@.com.")); 