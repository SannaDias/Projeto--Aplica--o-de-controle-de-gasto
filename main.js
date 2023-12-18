//onchange="" toda vez que o campo de email for modificado ele vai alterar o js

function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;
   
    //pega o valor da senha 
    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled =!emailValid || !passwordValid;
    
    //caso o email ou senha inválidos desabilita botão de login 
    //caso contrário, habilita botão de login
    }

   
   
   
function isPasswordValid(){
    const password = document.getElementById("password").value;
    if(!password) {
        return false;
    }
    return true;
}

//retorna true or false caso o email seja válido
function isEmailValid(){
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}