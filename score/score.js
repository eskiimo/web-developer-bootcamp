var pone = document.querySelector("#p1");
var ptwo = document.getElementById("p2");
var reset = document.getElementById("reset");
var h1 = document.querySelectorAll("span")[0];
var h2 = document.querySelectorAll("span")[1];
var submit = document.getElementById("submit");

var p1score = 0;
var p2score = 0;
var goal = 0;
// var limit= document.getElementById("limit").Value;

submit.addEventListener("click", function () {
  var limit = document.getElementById("limit");
  goal = limit.value;
  console.log(goal);
  document.querySelectorAll("span")[3].textContent = limit.value;
});

pone.addEventListener("click", function () {
  if (p1score <= goal - 2 && p2score != goal) {
    p1score++;
    h1.textContent = p1score;
  } else if (p1score < goal && p2score != goal) {
    p1score++;
    h1.textContent = p1score;
    h1.style.color = "green";
  }
});

ptwo.addEventListener("click", function () {
  if (p2score <= goal - 2 && p1score != goal) {
    p2score++;
    h2.textContent = p2score;
  } else if (p2score < goal && p1score != goal) {
    p2score++;
    h2.textContent = p2score;
    h2.style.color = "green";
  }
});

reset.addEventListener("click", function () {
  p1score = 0;
  p2score = 0;
  h1.textContent = 0;
  h2.textContent = 0;
  h1.style.color = "black";
  h2.style.color = "black";
  limit.value = null;
});
