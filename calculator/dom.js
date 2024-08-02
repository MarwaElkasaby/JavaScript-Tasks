var currentInput = '';
var previousInput = '';
var currentOperation = '';
var result = '';
var display = document.getElementById('Answer');
var equalEntered = false;
var lastEntered = '';
var err = document.getElementById('err');

function EnterNumber(value) {
    if (!equalEntered)
        currentInput += value;
    else {
        EnterClear();
        currentInput = value;
    }

    if (currentOperation != '')
        display.value = previousInput + currentOperation + currentInput;
    else
        display.value = currentInput;

    lastEntered = value;
}

function EnterOperator(op) {
    equalEntered = false;
    //handle negative number as num1;
    if (lastEntered === '') {
        if (op == '-') {
            currentInput = '-';
            display.value = previousInput + currentOperation + currentInput;
        }
        else {
            console.log('preventing NaN error');
        }
    }

    //handle negative number as num2;
    else {
        if (lastEntered === 'op') {
            if (op == '-') {
                currentInput = '-';
                display.value = previousInput + currentOperation + op;
            }
            else
                console.log('preventing NaN error');
        }
        else {

            if (currentOperation != '') {

                previousInput = Calculate().toString();
                currentInput = '';
                currentOperation = op;
                display.value = previousInput + op;
            }

            else {
                previousInput = currentInput;
                currentInput = '';
                currentOperation = op;
                display.value = previousInput + currentOperation;

            }
        }
    }


    lastEntered = 'op';
}

function Calculate() {

    var num1 = parseFloat(previousInput);
    var num2 = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                display.value = "Error: Division by zero";
                throw "error zero divion";
            }
            result = num1 / num2;
            break;
    }

    return result;
}

function EnterEqual() {
    if (lastEntered === 'op') {
        err.style.opacity = 1;
        setTimeout(function () {
            err.style.opacity = 0;

        }, 1000);
    }
    else {
        Calculate();
        display.value = result;
        equalEntered = true;
    }


}

function EnterClear() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    result = '';
    display.value = '';
    equalEntered = false;
}

function setButtonColor(key, add) {
    var button = document.querySelector(`input[value="${key}"]`);
    if (button) {
        if (add) {
            button.classList.add('pressed');
        } else {
            button.classList.remove('pressed');
        }
    }
}

document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (isFinite(key) || key == '.' || key == '+' ||
        key == '-' || key == '*' || key == '/' || key == 'Enter') {
        switch (key) {
            case 'Enter':
                EnterEqual();
                setButtonColor('=', true);
                break;

            case '/':
                EnterOperator('/');
                setButtonColor(key, true);

                break;

            case '*':
                EnterOperator('*');
                setButtonColor(key, true);

                break;

            case '+':
                EnterOperator('+');
                setButtonColor(key, true);

                break;

            case '-':
                EnterOperator('-');
                setButtonColor(key, true);

                break;

            case '.':
                EnterNumber('.');
                setButtonColor(key, true);

                break;

            default:
                EnterNumber(key);
                setButtonColor(key, true);

                break;
        }
    }
});

document.addEventListener('keyup', function (event) {
    var key = event.key;
    if (isFinite(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        setButtonColor(key, false);
    }
    else if (key === 'Enter')
        setButtonColor('=', false);

});
