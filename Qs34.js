//Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.

//Function that uses async/await to make an API call and returns a promise with the response
async function fetchData(url)
{
    try
    {
        const response = await fetch(url); //wait for the response from the server
        const data = await response.json();  //wait for the JSON data from the response
        return data; //return the data as a resolved promise
    }
    catch (error)
    {
        return Promise.reject(error); //return the error as a rejected promise
    }
}

fetchData('https://jsongplaceholder.typicode.com/posts/1').then((data)=>
{
    console.log(data); //log the fetched data
})
.catch((error)=>
{
    console.error(error); //log any error
});