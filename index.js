// This is an array where the value of each answer is pushed to
let allScores = []

//  Start the quiz from the landing screen to Q1
let quizStart = () => {
document.getElementById("Introduction").style.display = "none";
document.getElementById("Q1").style.display = "block";
}



// Submit answer for Q1 and go to Q2
let ToQ2 = () => {
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "block";
    document.getElementById("BackButton").style.display = "block";
    let q1Answer = document.querySelector('input[name="Q1"]:checked').value;
    console.log(q1Answer);
    allScores.push(q1Answer)
    }

let submitQ2Answer = (q2Answer) => {
    console.log(q2Answer)
    allScores.push(q2Answer);
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "block";
}
// // Submit answer for Q2 and go to Q3
// let ToQ3 = () => {
//     document.getElementById("Q2").style.display = "none";
//     document.getElementById("Q3").style.display = "block";
//     let q2Answer = document.querySelector('input[name="Q2"]:checked').value;
//     console.log(q2Answer);
//     allScores.push(q2Answer)
//     }

// Submit answer for Q3 and go to Q4
let ToQ4 = () => {
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "block";
    document.getElementById("BackButton").style.display = "block";
    let q3Answer = document.querySelector('input[name="Q3"]:checked').value;
    console.log(q3Answer);
    allScores.push(q3Answer)
    }

// Submit answer for Q4 and go to Q5
let ToQ5 = () => {
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "block";
    document.getElementById("BackButton").style.display = "block";
    let q4Answer = document.querySelector('input[name="Q4"]:checked').value;
    console.log(q4Answer);
    allScores.push(q4Answer)
    }

    // Results calculation and page direction
let ToResultsPage = () => {
    document.getElementById("Q5").style.display = "none";
    document.getElementById("ResultsPage").style.display = "block";
    document.getElementById("BackButton").style.display = "none";
    let q5Answer = document.querySelector('input[name="Q5"]:checked').value;
    console.log(q5Answer);
    allScores.push(q5Answer);

    let totalScore = 0;
    allScores.forEach((score) => {
        totalScore = totalScore + parseInt(score)
    });
    console.log(totalScore);
    console.log(totalScore/allScores.length);
    let averageScore = totalScore/allScores.length;
    /* Slight problem here mathematically as the mean score can never be lower than 1 or higher than 4, meaning Frog and Human may have slightly lower chance of being the outcome?
        Nonetheless I thought it was more interesting than calculating it using the modal value. */
    if (averageScore >= 1 && averageScore < 1.5) {
        document.getElementById("ResultsPage").style.display = "none";
        document.getElementById("Frog").style.display = "block";
    }
    else if (averageScore >= 1.5 && averageScore < 2.5) {
        document.getElementById("ResultsPage").style.display = "none";
        document.getElementById("Snake").style.display = "block";
    }
    else if (averageScore >= 2.5 && averageScore < 3.5) { 
        document.getElementById("ResultsPage").style.display = "none";
        document.getElementById("Lizard").style.display = "block";}
    
    else if (averageScore >= 3.5 && averageScore <= 4) {
        document.getElementById("ResultsPage").style.display = "none";
        document.getElementById("Human").style.display = "block";
    }
    }
    // Retake The Quiz
let Restart = () => {
    document.getElementById("Frog").style.display = "none";
    document.getElementById("Snake").style.display = "none";
    document.getElementById("Lizard").style.display = "none";
    document.getElementById("Human").style.display = "none";
    document.getElementById("Introduction").style.display = "block";
    allScores = []
}

// See Other Results
let seeOtherResults = () => {
    document.getElementById("Frog").style.display = "block";
    document.getElementById("Snake").style.display = "block";
    // document.getElementById("retake2").style.display = "none";
    // document.getElementById("seeOthers2").style.display = "none";
    document.getElementById("Lizard").style.display = "block";
    // document.getElementById("retake3").style.display = "none";
    // document.getElementById("seeOthers3").style.display = "none";
    document.getElementById("Human").style.display = "block";
    // document.getElementById("retake4").style.display = "none";
    // document.getElementById("seeOthers4").style.display = "none";
}
/* In hindsight I should have made these buttons a separate div and displayed them when needed, 
 rather than displaying by default with each answer and having to hide each one. Will edit this if time, but it's not urgent. */