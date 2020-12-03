var btn = document.getElementById("button");
var email = document.getElementById("email-input");
var error_icon = document.getElementById("error-icon");
var error_msg = document.getElementById("error-message");
var success = document.getElementById("success-message");

btn.addEventListener("click",function(){

        error_icon.classList.add("hide");
        error_msg.classList.add("hide");
        success.classList.add("hide");
    if(email.value.length == 0 || !email.value.includes("@"))
    {
        error_icon.classList.remove("hide");
        error_msg.classList.remove("hide");
        email.focus();
    }
    else{        
        success.classList.remove("hide");
    }
})