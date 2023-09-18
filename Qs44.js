//Write a function that takes a string as input and returns the number of vowels in the string.

function countVowels(str)
{
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(vowels.includes(str[i]))
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Pranay")); 
console.log(countVowels("hello")); 
console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); 
console.log(countVowels("aeiou")); 
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); 
console.log(countVowels("The quick brown fox jumps over the lazy dog")); 
console.log(countVowels("12345")); 