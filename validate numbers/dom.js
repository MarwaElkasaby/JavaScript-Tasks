document.getElementById("num").addEventListener('keydown', function (event) {
    var input = event.which;
    var num = false;
    if ((input >= 96 && input <= 105) || (input >= 48 && input <= 57) || input == 8 || input == 13) {
        num = true;
    }

    if (!num) {
        event.preventDefault();
        document.getElementById("warning").style.opacity = 1;
        setTimeout(function () {
            document.getElementById("warning").style.opacity = 0;}
            , 1000);
    }

});
