//Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter()
{
    let count = 0; //initialize count to 0

    //Define and return a function that increments count and return its value
    return function()
    {
        count++; //increment count by 1
        return count; //return the new value of count
    };
}

//create a new counter function
const counter = createCounter();

//Call the counter function multiple times and log the result
console.log(counter());
console.log(counter());
console.log(counter());