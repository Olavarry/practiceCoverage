/*
Write a program that parses a word and returns the word with the following: first letter
number  of distinct characters between first and last character, and last letter. For example, Smooth would become

*/

function parseWord(string){

    if(string.length == 0 || !(/^[A-Za-z-]*$/.test(string))){
        return 'string is empty or contains non-alphabetic characters'
    }
    else{

        firstChart = string.charAt(0)
        lastChart = string.charAt(string.length -1)
        string = string.substring(1)
        string = string.slice(0, -1)
        uniqueCount = new Set(string).size;
        newString = firstChart + uniqueCount + lastChart
        return newString
    }
}

module.exports = parseWord;
