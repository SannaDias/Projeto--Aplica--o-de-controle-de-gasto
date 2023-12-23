//onchange="" toda vez que o campo de email for modificado ele vai alterar o js

function oncChangeEnail() {
    toggleButtonsDisable();
    toggleEmailErros();
    toggleEmailErros();
    }

function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErros();
}

   
function isPasswordValid(){
    const password = form.password().value;
    if(!password) {
        return false;
    }
    return true;
}




//função que mostra os erros da senha 
function togglePasswordErros(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

//retorna true or false caso o email seja válido
function isEmailValid(){
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

//função responsável por mostrar/esconder os erros de email 
function toggleEmailErros(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
   
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}
//desabilida os botões
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;
   
    //pega o valor da senha 
    const passwordValid = isPasswordValid();
    form.loginButton().disabled =!emailValid || !passwordValid;
    //caso o email ou senha inválidos desabilita botão de login 
    //caso contrário, habilita botão de login
}

//função que valida o email
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    loginButton: () => document.getElementById("login-button"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button")
}