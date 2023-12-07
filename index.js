//  Start the quiz from the landing screen to Q1
let quizStart = () => {
document.getElementById("Introduction").style.display = "none";
document.getElementById("Q1").style.display = "inline-block";
}

// Question 2
let ToQ2 = () => {
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "inline-block";
    document.getElementById("PageNav").style.display = "inline-block";
    }

// Question 3
let ToQ3 = () => {
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "inline-block";
    }

// Question 4
let ToQ4 = () => {
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "inline-block";
    document.getElementById("PageNav").style.display = "inline-block";
    }

// Question 5
let ToQ5 = () => {
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "inline-block";
    document.getElementById("PageNav").style.display = "inline-block";
    }

    // Results Page
let ToResultsPage = () => {
    document.getElementById("Q5").style.display = "none";
    document.getElementById("ResultsPage").style.display = "inline-block";
    document.getElementById("PageNav").style.display = "none";
    }

    // Retake The Quiz
let Restart = () => {
    document.getElementById("ResultsPage").style.display = "none";
    document.getElementById("Introduction").style.display = "inline-block";
}