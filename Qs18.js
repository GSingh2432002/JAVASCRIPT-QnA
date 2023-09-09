//Write a function that takes an object and returns an array of all the keys in the object.

function getKeys(obj)
{
    //Using Object.Keys() methods to get all the keys in the object
    const keys = Object.keys(obj);

    return keys;
}

//Test cases
const person = {
    name : "Gaurav",
    age : 21,
    gender : "male",
    city : "Kolkata",
    occupation : "Engineering",
};

console.log(getKeys(person));
console.log(getKeys({}));