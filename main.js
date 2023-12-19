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
    const password = document.getElementById("password").value;
    if(!password) {
        return false;
    }
    return true;
}




//função que mostra os erros da senha 
function togglePasswordErros(){
    const password = document.getElementById('password').value;
    if(!password){
        document.getElementById('password-required-error').style.display="block";
    } else {
        document.getElementById('password-required-error').style.display="none";
    }
}

//retorna true or false caso o email seja válido
function isEmailValid(){
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

//função responsável por mostrar/esconder os erros de email 
function toggleEmailErros(){
    const email = document.getElementById('email').value;
    if(!email){ //se o email estiver vazio
        document.getElementById('email-required-error').style.display ="block"; //mostra o erro de email é obg
    } else {
        document.getElementById('email-required-error').style.display ="none"; // se não ele não mostra nada
    }

    if(validateEmail(email)) { //se eu consigo validar o email
        document.getElementById('email-invalid-error').style.display ="none";
    } else {
        document.getElementById('email-invalid-error').style.display ="block";
    }
}
//desabilida os botões
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;
   
    //pega o valor da senha 
    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled =!emailValid || !passwordValid;
    //caso o email ou senha inválidos desabilita botão de login 
    //caso contrário, habilita botão de login
}

//função que valida o email
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

