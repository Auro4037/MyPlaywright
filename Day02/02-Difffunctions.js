function userProfile(name){

    console.log(`Hello ${name}`);
}

userProfile('Auro');


let double = (num) => num * 2;

// Call the function
console.log(double(5)); 


setTimeout(function(){

    console.log("This message is delayed by 2secs");

}, 2000);
