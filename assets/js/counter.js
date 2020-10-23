var counter = 0;

function countUp() {
    counter ++;
    console.log("counter: " + counter);
    document.getElementById("counter").textContent = counter;
}

function countDown() {
    if (counter >= 1) {
        counter --;
        console.log("counter: " + counter);
        document.getElementById("counter").textContent = counter;
    }

}

function reset() {
    counter = 0;
    console.log("counter: " + counter);
    document.getElementById("counter").textContent = counter;
}

document.getElementById('incr').onclick = function () {countUp()};
document.getElementById('decr').onclick = function () {countDown()};
document.getElementById('rset').onclick = function () {reset()};