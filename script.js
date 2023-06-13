function insert(num) {
    var screenNum = document.getElementById(`result`).innerHTML;
    document.getElementById("result").innerHTML = screenNum + num;
}

function clearScreen() {
    document.getElementById(`result`).innerHTML = "";
}

function deleteLast() {
    var screenNum = document.getElementById(`result`).innerHTML;
    document.getElementById("result").innerHTML = screenNum.substring(0, screenNum.length - 1);
}

function dotSomething(dot) {
    var screenNum = document.getElementById(`result`).innerHTML;
    if (!screenNum.includes(".")) {
        document.getElementById("result").innerHTML = screenNum + dot;
    }

}

function calculate() {
    var screenNum = document.getElementById(`result`).innerHTML;
    if (screenNum) {
        var result = eval(screenNum);
        var limitedResult = result.toFixed(12);

        if (limitedResult.length > 10) {
            document.getElementById("result").innerHTML = parseFloat(limitedResult);
        }
        else {
            document.getElementById("result").innerHTML = parseFloat(result);
        }
    }

}

function operators(op) {
    var screenNum = document.getElementById(`result`).innerHTML;
    var operators = ['+', '/', '-', '*', '.'];
    var lastChar = screenNum.slice(-1);

    if (!operators.includes(lastChar)) {
        document.getElementById("result").innerHTML = screenNum + op;
    }

}