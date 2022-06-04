const btnPLus = document.getElementById('buttonCountPlus');
const btnMinus = document.getElementById('buttonCountMinus');
let inputNumber = document.querySelector('.number');
let rangeNumber = document.querySelector('.range-number');
let minValue = document.querySelector('.min-value');
let maxValue = document.querySelector('.max-value');
let countNumber = document.querySelector('.calculation');

let getCounter = (function () {
    let counter = 0;

    btnPLus.onclick = () => {
        counter++
        updateDisplay(counter);
    }

    btnMinus.onclick = () => {
        counter--;
        updateDisplay(counter);
    }

    //Range
    inputNumber.innerHTML = rangeNumber.value;
    minValue.innerHTML = rangeNumber.min;
    maxValue.innerHTML = rangeNumber.max;

    rangeNumber.oninput = () => {
        inputNumber.innerHTML = rangeNumber.value;
    }

    rangeNumber.onmouseup = () => {
        counter += parseInt(rangeNumber.value);
        updateDisplay(counter);
    }

    function updateDisplay(counter) {
        return countNumber.innerHTML = counter;
    }

    updateDisplay(counter);
})

getCounter()
