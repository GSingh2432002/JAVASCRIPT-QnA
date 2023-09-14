//Write a function that logs an error message to the console if a certain condition is not met.

function logErrorif(condition, message)
{
    if(!condition)
    {
        console.error(message);
    }
}