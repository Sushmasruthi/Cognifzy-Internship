var currentTime = new Date().getHours();

if (currentTime < 12) {
    alert("Good morning!");
} else if (currentTime < 18) {
    alert("Good afternoon!");
} else {
    alert("Good evening!");
}

var calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', addNumbers);

function addNumbers() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById('result').innerText = 'Result: ' + sum;
}
