function oncChangeEnail(){


}

const form = {
    confirmPassword:() => document.getElementById("confimPassword"),
    email: () => document.getElementById("email"),
    EmailValidError: () => document.getElementById("email-invalid-error"),
    EmailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password")
}