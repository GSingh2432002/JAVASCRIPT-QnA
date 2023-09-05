//Write a program that takes a string and prints out the number of vowels in the string.

//function to count the number of vowels in a string
function countVowels(str)
{
    //define an array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    //loop through each character in the string
    for(let i = 0; i < str.length; i++)
    {
        //check if the character is a vowel
        if(vowels.includes(str[i].toLowerCase()))
        {
            count++;
        }
    }

    //return the number of vowels
    return count;
}

//test cases
console.log(countVowels("gaurav"));