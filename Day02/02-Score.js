function getGrade(score){

    let grade;
    switch (true) {
        case (score >= 90):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B";
            break;
        case (score >= 70):
            grade = "C";
            break;
        case (score >= 60):
            grade = "D";
            break;
        default:
            grade = "F";
    }

    return grade;

}

const studentScore = 85;
console.log(`Score: ${studentScore}, Grade: ${getGrade(studentScore)}`);