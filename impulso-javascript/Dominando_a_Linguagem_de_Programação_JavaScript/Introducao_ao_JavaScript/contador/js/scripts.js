var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
}
