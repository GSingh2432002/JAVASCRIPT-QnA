//Write a program that displays a string in reverse order.

//Define the string reverse
const originalString = "Gaurav";

//Define a function that takes a string parameter
function reverseString(str)
{
    //Convert string to an array, reverse the array, then join it back into a string
    const reverseString = str.split("") .reverse() .join("");

    //Return the reversed string
    return reverseString;
}

//Call hte function with the original string and ouput the result to the console
console.log(reverseString(originalString));