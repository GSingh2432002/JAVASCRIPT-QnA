//Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str)
{
    //Create an empty object to store the letter counts
    const counts = {};

    //Loop through each character in the string
    for(let i = 0; i < str.length; i++)
    {
        const char = str[i];

        //Check if the character is already in the counts object
        if(counts[char])
        {
            //If it is, increment the count by 1
            counts[char]++;
        }
        else
        {
            //if its not, add it to the object with a count of 1
            counts[char] = 1;
        }
    }

    //return the counts object
    return counts;
}

const letterCounts = countLetters("GauravKumarSingh");
console.log(letterCounts);