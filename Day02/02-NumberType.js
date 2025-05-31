function isNumberSign(num){

    let numsign;

    if(num >0){
        numsign = "is Positive"
    }
    else if(num===0){
        numsign = "is Nuetral"
    }

    else{
        numsign = "is Negative"
    }

    return numsign;

}

    

let inputnum = 0;
console.log(`The number ${inputnum} is ${isNumberSign(inputnum)}`);