//Write a function that takes a string as input and returns true if the string contains only alphabets, and false otherwise.

function containsOnlyAlphabet(str)
{
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
}

console.log(containsOnlyAlphabet("abcDEF"));
console.log(containsOnlyAlphabet(123));
console.log(containsOnlyAlphabet("a b c"));
console.log(containsOnlyAlphabet(""));