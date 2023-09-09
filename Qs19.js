//Write a function that takes an array of objects and returns an array of all the values of a specified property name.

function getPropertyValues(arr, propName)
{
    //Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);

    return values;
}

//Test cases
const people = [
    {name:"gaurav", age:21, gender:"male"},
    {name:"Anjani" ,age:30, gender:"female"},
    {name:"pahel", age:21, gender:"female"},
];

console.log(getPropertyValues(people, "name"));
console.log(getPropertyValues(people, "age"));
console.log(getPropertyValues(people, "gender"));