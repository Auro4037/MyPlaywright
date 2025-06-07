function isAnagram(str1,str2){
    const trimmedStr1= str1.trim();
    const trimmedStr2=str2.trim();

    const lstr1= trimmedStr1.toLowerCase();
    const lstr2= trimmedStr2.toLowerCase();

   const sortedStr1= lstr1.split('').sort().join('');
   const sortedStr2= lstr2.split('').sort().join('');

   return sortedStr1===sortedStr2;

}
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('tar', 'rat'));  // false