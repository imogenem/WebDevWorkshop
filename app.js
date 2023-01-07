document.getElementById("hello-button").addEventListener("click", printHello);

function printHello() {
  console.log("Hello");
  document.getElementById("hello").innerHTML = "Hello!";
}

let count = 0;

function addOne() {
  count++;
  document.getElementById("counter").innerHTML = count;
}

document.getElementById("counter-button").addEventListener("click", addOne);
