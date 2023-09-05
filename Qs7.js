//Write a program that takes a number and prints the multiplication table for that number.

//Define a function that takes a number parameter
function multiplicationTable(number)
{
    //Use a loop to iterate from 1 to 10
    for(let i = 1; i <= 10; i++)
    {
        //Multiply the number with current iterator and store the result in a variable
        let result = number * i;

        //Print the multipication table for the given number
        console.log(`${number} x ${i} = ${result}`);
    }
}

//Call the function with a test case to see the output
multiplicationTable(15);