//Write a function that takes an array of numbers and uses the spread operator to find the maximum value.

const findMax = (numbers) =>
{
    //spread operator used to pass the array elements as arguments to Math.max()
    return Math.max(...numbers);
}

//testing the function
console.log(findMax([5,3,9,1,7]));
console.log(findMax([0,-2,10,4]));