// /Write a function that takes a string as input and replaces all occurrences of "cat" with "dog".

function replaceCatWithDog(str)
{
    const regex = /cat/g;
    return str.replace(regex,"dog");
}
console.log(replaceCatWithDog("The cat sat on the mat.")); // The dog sat on the mat.
console.log(replaceCatWithDog("The cats sat on the mats.")); // The dogs sat on the mats.
console.log(replaceCatWithDog("Caterpillar")); // Dogerpillar
console.log(replaceCatWithDog("Cats are cool.")); // Dogs are cool.