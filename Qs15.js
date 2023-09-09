//Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(numbers)
{
    let sum = 0; //initialize sum to 0

    //loop through each number in the array
    for(let i = 0; i < numbers.length; i++)
    {
        //Check of the current number is even
        if(numbers[i] % 2 === 0)
        {
            sum += numbers[i]; //add the current number to sum
        }
    }
    //return the final sum of even numbers
    return sum;
}

//test cases
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(sumEvenNumbers(numbers));