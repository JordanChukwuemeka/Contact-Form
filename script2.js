
function checkName(){
    let conNmae = document.getElementById("contactname");
    let nameError = document.getElementById("nameerror");

    if (conNmae.value.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    } 
    else if (!conNmae.value.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write your full name';
        return false;
    } 
    else{
        nameError.innerHTML = 'Valid';
        nameError.style.color = "green";
        return true;
    }
    
}

function checkPhone() {
    let conPhone = document.getElementById("contact-phone");
    let phoneError = document.getElementById("phone-error");

    if (conPhone.value.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    } 
    else if (conPhone.value.length !== 10 ) {
        phoneError.innerHTML = "Phone number must be 10 digits";
        return false;
    }
    else if (!conPhone.value.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Please digits only";
        return false;
    } else {
        phoneError.innerHTML = "Valid";
        phoneError.style.color = "green";
        return true;
    }
    
}

function checkEmail() {
    let conEmail = document.getElementById("contact-email");
    let emailError = document.getElementById("email-error");

    if (conEmail.value.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    else if (!conEmail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,8}$/)) {
        emailError.innerHTML = "Invalid email address";
        return false;
    }
    else {
        emailError.innerHTML = "Valid";
        emailError.style.color = "green";
        return true;
    }
}

function checkMsg() {
    let conMessage =  document.getElementById("contact-message");
    let msgError = document.getElementById("message-error");
    let require = 35;
    let right = require - conMessage.value.length;

    if (right > 0) {
        msgError.innerHTML = right +  " more characters needed";
        return false;
    }
    else {
        msgError.innerHTML = "Valid";
        msgError.style.color = "green";
        return true;
    }
}

function validForm() {
    let submitError = document.getElementById("submit-error");

    if (!checkName() || !checkPhone() || !checkEmail() || !checkMsg()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error to submit";

        setTimeout(function() {
        submitError.style.display = "none";
        }, 2500)
        return false;
    }
}