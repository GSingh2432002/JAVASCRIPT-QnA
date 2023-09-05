//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

//Define function that takes a number parameter
function sumOfNumbers(number)
{
    //Define a variable to store the sum
    let sum = 0;
    
    //Use a for loop to iterate from 1 to the given number
    for(let i = 1; i <= number; i++)
    {
        //Add the current iterator value to the sum variable
        sum += i;
    }
    //Return the sum
    return sum;
}

//Call the function with different test cases to see the output
console.log(sumOfNumbers(10));
console.log(sumOfNumbers(111));
console.log(sumOfNumbers(2));
