'use strict';
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Melissa Lutz
      Date: 5/28/2025

      Filename: project08-01.js
*/
/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');
/*--------------- Object Code --------------------*/
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

timer.prototype.runPause = function (timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(function () {
      countdown(timer, minBox, secBox);
    }, 1000);
  }
};

function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
    timer.seconds -= 1;
  } else if (timer.minutes > 0) {
    timer.minutes -= 1;
    timer.seconds = 59;
  } else {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}

let myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

minBox.onchange = function () {
  myTimer.minutes = parseInt(minBox.value);
};

secBox.onchange = function () {
  myTimer.seconds = parseInt(secBox.value);
};

runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
