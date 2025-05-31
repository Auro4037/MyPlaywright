function launchBrowser(browsername){
    if(browsername==="Chrome"){
        console.log("This is Chrome Browser");
    }
    else{
        console.log("This is Firefox Browser")
    }
}

function runTests(testType){
    switch(testType.toLowerCase()){
        case "smoke":
            console.log("Smoke testing........")
            break;
        
        case "regression":
            console.log("Regression testing........")
            break;
        
        case "sanity":
            console.log("Sanity testing......")
            break;
        
            default:
                console.log("Default test cases........")
    }

    
}

launchBrowser("Chrome");
launchBrowser("Firefox");

runTests("deafult");