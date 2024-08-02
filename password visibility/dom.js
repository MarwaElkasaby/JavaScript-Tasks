function passwordVisibility() {

    var password = document.getElementById("password-input");
    
    if (password.type == "password") {
      password.type = "text";
      document.getElementById("eye").style.display="none";
      document.getElementById("slashed-eye").style.display="inline";

    } 
    else {
      password.type = "password";
      document.getElementById("slashed-eye").style.display="none";
      document.getElementById("eye").style.display="inline";
    }

  }
  