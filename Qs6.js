//Write a program that takes a number and checks whether it is positive, negative, or zero.

// Check if the number is positive
function checkNumber(number)
{
    if(number > 0)
    {
        // Check if the number is positive
        console.log(`${number} is positive`);
    }
    else if(number < 0)
    {
        // Check if the number is negative
        console.log(`${number} is Negative`);
    }
    else
    {
        // If neither of the above conditions are met, the number must be zero
        console.log(`${number} is zero`);
    }
}

//Call the function with various intput to see the output
checkNumber(10);
checkNumber(-55);
checkNumber(0);