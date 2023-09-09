//Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

function filterLongStrings(arr)
{
    let filteredArr = [];

    //loop through each string in the original array
    for(let i = 0; i < arr.length; i++)
    {
        //Check if the string's length is greater than 5
        if(arr[i].length > 5)
        {
            //if it is, push the string to filtered array
            filteredArr.push(arr[i]);
        }
    }
    //return the filtered array
    return filteredArr;
}

//Test cases
console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon"]));
console.log(filterLongStrings(["Gaurav", "bikas", "Ruhi", "khushi"]));