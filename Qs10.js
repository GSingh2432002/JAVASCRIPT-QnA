//Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.

function findCommonElements(arr1, arr2)
{
    //Create an empty array to hold the common elements
    let commonElements = [];

    //Loop through each element in arr1
    for(let i = 0; i < arr1.length; i++)
    {
        //check if the current element is in arr2
        if(arr2.includes(arr1[i]))
        {
            //If the elements is in arr2 and not already in commonElements array, add it
            if(!commonElements.includes(arr1[i]))
            {
                commonElements.push(arr1[i]);
            }
        }
    }
    //Sort the commonElements array in ascending order
    commonElements.sort((a,b) => a - b);

    //return the commonElements array
    return commonElements;
}
const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];
const commonElements = findCommonElements(arr1,arr2);
console.log(commonElements);