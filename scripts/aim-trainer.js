var aimTrainerContainer = document.getElementById("aim-trainer-container");
var aimTrainerDiv = document.getElementById("aim-trainer");
var aimTrainerText = document.getElementById("aim-trainer-text");
var spots = document.querySelector(".spots");
var aimTrainerHeading = document.getElementById("aim-trainer-heading");
var startTest = document.getElementById("start-aim-trainer");
var aimTrainerRetake = document.getElementById("aim-trainer-retake");
var startTime, endTime, totalTimeTaken = 0;
var numCircles = 10;
var currentCircle = 0;
var targetClicks = 0;


function generateRandomPosition() {
    var x = Math.floor(Math.random() * 450);
    var y = Math.floor(Math.random() * 450);
    return {x: x, y: y};
}

function generateCircle(){
    // Remove active class from previous circle
    if (currentCircle > 0) {
      spots.children[currentCircle - 1].classList.remove('active');
    }
    // Generate random position for new circle
    var position = generateRandomPosition();
    var circle = document.createElement('div');
    circle.classList.add('spot');
    circle.style.top = position.y + 'px';
    circle.style.left = position.x + 'px';
    // Add click event listener to new circle
    circle.addEventListener('click', handleClick);
    // Add circle to spots container
    spots.appendChild(circle);
    // Add active class to new circle
    circle.classList.add('active');
    currentCircle++;
}

function handleClick() {
    // Calculate time taken and add to total time
    endTime = new Date().getTime();
    var timeTaken = (endTime - startTime) / 1000;
    // Update total time display
    // Generate new circle or end game
    if (currentCircle < numCircles) {
        generateCircle();
    } else {  
        aimTrainerHeading.innerHTML = "Your time is: " + timeTaken.toFixed(2) + " seconds";
        aimTrainerDiv.style.display = "none";
        aimTrainerRetake.style.display = "block";
    }
}

startTest.addEventListener("click",function(){
    startTime = new Date().getTime();
    generateCircle();
    aimTrainerDiv.style.display = "block";
    aimTrainerText.style.display = "none";
});


aimTrainerRetake.addEventListener("click",function(){
    location.reload();
})