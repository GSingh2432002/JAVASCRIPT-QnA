//Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.

//Function that throws an error if the parameter is not a number
function validateNumber(num)
{
    return new Promise((resolve,reject)=>
    {
        if(typeof num !== "number")
        {
            reject(new Error("Invalid input. Expected a number."));
        }
        else
        {
            resolve(num);
        }
    });
}

//Testing the function
validateNumber(5)
.then(num => console.log(num))
.catch(err => console.error(err.message));

validateNumber("not a number")
.then(num => console.log(num))
.catch(err => console.error(err.message));