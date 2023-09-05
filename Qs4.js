//Write a function that takes two numbers as arguments and returns the larger number.

//Define a function that takes two number parameters
function findLargerNumber(num1,num2)
{
    //Check if num1 is greater than num2
    if(num1 > num2)
    {
        //If so, return num1
        return num1;
    }
    else
    {
        //If not, return num2
        return num2;
    }
}
//Call the function and output the result to the console
console.log(findLargerNumber(5,99));