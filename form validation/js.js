var input = document.getElementsByTagName('input');
var err = document.getElementsByTagName('div');
var form = document.getElementsByTagName('form');
var table = document.getElementsByTagName("table")[0];

console.log(input);
console.log(err);

var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

form[0].addEventListener('submit', function (e) {
    e.preventDefault();
    var isValid = validate();

    if(isValid)
        {
            table.style.display='block';
            addDataToTable(input[0].value, input[1].value, input[2].value)
        }
});


function validate() {



    if (input[0].value === '') {
        err[0].textContent = 'please enter a value';

    }

    else if (isFinite(input[0].value)) {
        err[0].textContent = 'please enter a text';

    }

    else {
        err[0].textContent = '';
    }



    if (input[1].value === '') {
        err[1].textContent = 'please enter a value';

    }

    else if (isNaN(input[1].value) || input[1].value < 0) {
        err[1].textContent = 'please enter age';
    }

    else {
        err[1].textContent = '';
    }


    if (input[2].value === '') {
        err[2].textContent = 'please enter a value';

    }
    else if (!emailRegex.test(input[2].value)) {

        err[2].textContent = 'please enter an email';

    }

    else {
        err[2].textContent = '';
    }

    if( err[0].textContent === ''&& err[1].textContent === ''&& err[2].textContent === '')
    return true;

    return false;
}

function addDataToTable(userName, age, email) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = userName;
    cell2.innerHTML = age;
    cell3.innerHTML = email;
  }

