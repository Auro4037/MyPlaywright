function lengthOfLastWord(str) {
    // Trim any leading or trailing spaces
    const trimmedStr = str.trim();
    
    // Split the string into words (split by spaces)
    const words = trimmedStr.split(' ');
    
    // Get the last word
    const lastWord = words[words.length - 1];


    
    // Return the length of the last word
    return lastWord.length;
}


console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
