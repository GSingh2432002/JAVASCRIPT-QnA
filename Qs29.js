//Write a function to simulate an asynchronous delay using a callback.

function simulateDelay(delay,callback)
{
    setTimeout(callback, delay);
}

//Example Usage
console.log("Before Delay");

simulateDelay(2000, ()=>{
    console.log("After delay");
});

console.log("function finished executing");