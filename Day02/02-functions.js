//Named function

function funname1(){
    console.log("Hello")

    //let a = 10;
    //const b= 20;
    //return a+b;
}

funname1();

//anonymous function

let function2 = function(){
    console.log("this is anonymous func");
}

function2();

//arrow function

let funname3 = () =>{
    console.log("this is arrow func");
}

funname3()

//single line arrow function

const funname4 =(a,b)=>a*b;
console.log(funname4(4,5));

//IIFE

(function(){
    console.log("This is IIFE")
})

