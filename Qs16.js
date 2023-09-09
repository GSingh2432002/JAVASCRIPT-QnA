//Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

//function to calculate the sum of all numbers in array
function sumArrayNumbers(arr)
{
    let sum = 0; //Initialize sum variable to zero

    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i]; //add each number to sum
    }
    return sum;
}

//test cases
const numbers1 = [1,2,3,4,5];
console.log(sumArrayNumbers(numbers1));

const numbers2 = [10,20,30];
console.log(sumArrayNumbers(numbers2));

const numbers3 = [-1,-45,5,78];
console.log(sumArrayNumbers(numbers3));