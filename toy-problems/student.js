// definwe the gradeStudent with the argument (marks)
function gradeStudent(marks) {
    if (marks > 79) {
        return 'A';
    }
    //the above for any mark above 79 will have achieved an A
    //for marks between 60 and 79 the student will have achieved a B
    else if (marks >= 60 && marks <= 79) {
        return 'B';
    }
    //for marks between 49 and 59 the student will have achieved a C
    else if (marks>= 49 && marks <= 59) {
        return 'C';
    }
    //for marks between 40 and 49 the student will achieve a D
    else if (marks >= 40 && marks <= 49) {
        return 'D';
    }
    //otherwise for marks below 40 the student will acheive a grade E
    else {
        return 'E'
    }

}
