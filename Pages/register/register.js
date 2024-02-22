function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function onChangePassword() {
    const password = form.password().value;
    console.log("Password:", password);
    form.passwordRequiredError().style.display = password ? "none" : "block";
    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";
    validatePasswordsMatch();
    toggleRegisterButtonsDisabled();
}


function register(){
    showLoading();
    const email = form.email().value
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();
        window.location.href="../home/home.html"
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    })
}

function getErrorMessage(error){
    if (error.code =="auth/email-already-in-use"){
        return "Email ja está em uso"
    }
    return error.message;
}


function onChangeConfirmPassword(){
  validatePasswordsMatch();
  toggleRegisterButtonsDisabled()
}

function validatePasswordsMatch() {
    const password =form.password().value;
    const confirmPassword = form.confirmPassword().value;


     form.confirmPasswordDosentMatchError().style.display = password == confirmPassword ? "none" : "block"; 
}

function toggleRegisterButtonsDisabled(){
    form.registerButton().disabled = !isFormValid();

}

function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if (password !== confirmPassword) {
        return false;
    }

    return true;
}



const form = {
    confirmPassword: () => document.getElementById("confirmPassword"),
    confirmPasswordDosentMatchError: () => document.getElementById("password-doesnt-match-error"),
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"), // Corrigido para "emailRequiredError"
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLengthError: () => document.getElementById("password-min-length-error"), // Corrigido para "password-min-length-error"
    password: () => document.getElementById("password"),
    registerButton : () => document.getElementById("register-button")
};

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
