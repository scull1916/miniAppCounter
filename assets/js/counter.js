var counter = 0;
// initalize to 1 as a default value in case user decides not to select an interval
var userInterval = 1;

function interval() {
    userInterval = parseInt(document.getElementById('userPick').value);
    console.log("userInterval: " + userInterval);
    console.log(typeof userInterval);
}

function returnDefault() {
    userInterval = 1;
    document.getElementById('userPick').value = 1;
}



function countUp() {
    //counter ++;
    counter += userInterval;
    console.log("counter: " + counter);
    document.getElementById("counter").textContent = counter;
}

function countDown() {
    if (counter >= 1) {
        //counter --;
        counter -= userInterval;
        console.log("counter: " + counter);
        document.getElementById("counter").textContent = counter;
    }

}

function reset() {
    counter = 0;
    //userInterval = 1;
    console.log("counter: " + counter);
    document.getElementById("counter").textContent = counter;
}

document.getElementById('incr').onclick = function () {countUp()};
document.getElementById('decr').onclick = function () {countDown()};
document.getElementById('rset').onclick = function () {reset()};
document.getElementById('submit') = function() {interval()};