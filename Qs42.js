// /Write a function that takes a string as input and returns true if the string contains at least one digit, false otherwise.

function containsDigit(str)
{
    const regex = /\d/;
    return regex.test(str);
}

console.log(containsDigit("abc1223"));
console.log(containsDigit("abc"));
console.log(containsDigit("123"));
console.log(containsDigit("a1b2c3d4e5f6"));