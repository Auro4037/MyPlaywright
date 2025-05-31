function isOddOrEven(number){

    let result;
    if(number%2===0){
        result="Even";
    }
    else{
        result="Odd"
    }
    return result;
}

let inputnumber=23;
console.log(`The number ${inputnumber} is ${isOddOrEven(inputnumber)}`);