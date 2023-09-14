//Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.

//This function makes multiple API calls in parallel using async/await
async function fetchMultipleData(urls) 
{
    try 
    {
        //use Promise.all to make multiple API calls and wait for all of them to resolve
        const responses = await Promise.all(urls.map)(url => fetch((url)));

        //Extract the response data from eachApI call and return as an array
        const data = await Promise.all(responses.map(response => response.json()));
        return data;
    }
    catch(error)
    {
        //Returns the error message if any of the API calls fail
        return error.message;
    }
}
// Example usage
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
];
  
  // Call the function with the URLs and log the array of responses
fetchMultipleData(urls)
.then(responses => console.log(responses))
.catch(error => console.log(error));