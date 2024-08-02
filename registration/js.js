var input = document.getElementsByTagName('input');
var err = document.getElementsByTagName('div');
var form = document.getElementsByTagName('form');
var genderInputs = document.getElementsByName("Gender");
var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
var isvalid = true;


form[0].addEventListener('submit', function (e) {
    clearTimeout(timeout);
    if(!validate())
    e.preventDefault();
});


timeout=setTimeout(function () {
    if (input[0].value === "" || input[1].value === "" || input[2].value === "" || input[3].value === "" || input[4].value === "") {
        alert("Time out you didn't enter any data")
    }
}, 10000)


function validate() {

    if (input[0].value === '') {
        err[0].textContent = 'please enter a value';
        isvalid = false;

    }

    else if (isFinite(input[0].value)) {
        err[0].textContent = 'please enter a text';
        isvalid = false;

    }

    else {
        err[0].textContent = '';
    }



    if (input[1].value === '') {
        err[1].textContent = 'please enter a value';
        isvalid = false;

    }

    else if (isFinite(input[1].value)) {
        err[1].textContent = 'please enter address';
        isvalid = false;
    }

    else {
        err[1].textContent = '';
    }


    if (input[2].value === '') {
        err[2].textContent = 'please enter a value';
        isvalid = false;

    }
    else if (!emailRegex.test(input[2].value)) {

        err[2].textContent = 'please enter an email';
        isvalid = false;

    }

    else {
        err[2].textContent = '';
    }


    if (input[3].value === '') {
        err[3].textContent = 'please enter a value';
        isvalid = false;

    }
    else if (input[3].value.length !=11 ) {

        err[3].textContent = 'please enter a valid phone number';
        isvalid = false;
    }

    else {
        err[3].textContent = '';
    }


    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            isvalid = true;
            err[4].textContent = "";
            break;
        }
        else
        {
            err[4].textContent = "This feild is required"
            isvalid = false;

        }
    }
   
    return isvalid;


    
}