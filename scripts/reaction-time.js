var reactionContainer = document.getElementById("reaction-time-container");
var reactionContainerResult = document.getElementById("reaction-time-container-result");
var reactionContainerSpan = document.getElementById("reaction-time-container-span");
var reactionTimeSpedometer = document.getElementById("reaction-time-spedometer");
var reactionTimeWarning = document.getElementById("reaction-time-alert");
var reactionTimeWaiting = document.getElementById("reaction-time-waiting");
var reactionTimeHeading = document.getElementById("reaction-time-heading");
var reactionTimeTryAgain = document.getElementById("reaction-time-try-again");

var colorChanged = false;

reactionTimeTryAgain.addEventListener("click",function(){
    location.reload();
});

function startReactionTest() {
  var randomTime = Math.random() * (5 - 1) + 1;
  
  reactionTimeSpedometer.style.display = "none";
  reactionTimeWarning.style.display = "none";
  reactionTimeWaiting.style.display = "block";
  reactionContainerSpan.style.display = "none";
  reactionContainerResult.innerHTML = "Wait For Red...";

  setTimeout(function() {
    reactionContainer.style.backgroundColor = "red";
    var startTime = Date.now();
    colorChanged = true;

    reactionContainer.addEventListener("click", function onClick() {
       if(colorChanged) {
        var reactionTime = Date.now() - startTime;
        reactionContainerResult.innerHTML = "Your reaction time is " + reactionTime + "ms.";
        reactionTimeTryAgain.style.display = "block";
      }

      // remove the event listener to prevent it from stacking up
      reactionContainer.removeEventListener("click", onClick);
    });
  }, randomTime * 1000);
}

reactionContainer.addEventListener("click",startReactionTest);