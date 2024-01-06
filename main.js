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


function login(){
        showLoading();
        firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response =>{
            window.location.href = "Pages/home/home.html"
        }).catch(error=>{
            hideLoading();
           alert( getErrorMessage(error));
        }) ;
       
    //window.location.href = "Pages/home/home.html"
 }   

 //função que alerta o usuário não encontrado de acordo com o codigo do erro mostrado no console.
 function getErrorMessage(error) {
   
    if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found") {
        return "Usuário não encontrado"
    }
    if (error.code == "auth/wrong-password"){
        return "Senha inválida";S
    }
        return error.message;
 }

 function register(){
    showLoading(); //mostra o componente de carregamento na tela sempre que o programa tiver fazendo
    window.location.href = "Pages/register/register.html"
 }

function recoverPassword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(document.getElementById("email").value).then(() =>{
    //firebase.auth().sendPasswordReseEmail(form.email().value) //função retorna uma promisse
        hideLoading(); // quando o email for enviado com sucesso, escondo componente de loadin 
        alert("Email enviado com sucesso");
    }).catch(error =>{ //se der erro
        hideLoading();// esconde o componente de loading
        alert(getErrorMessage(error));//e sobe o alerta de erro
    }) ;
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