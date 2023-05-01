const Email = document.getElementById("Email")
const Password = document.getElementById("Password")
let emailLabel = document.getElementById("labelEmail")
let labelPassword = document.getElementById("labelPassword")


Email.addEventListener('input', (event) => {
    const inputVal = event.target.value;

    if(inputVal.length > 0) {
        emailLabel.style.marginTop = "1px";
    } else {
        emailLabel.style.marginTop = "12px";
    }
} )
Password.addEventListener('input', (event) => {
    const inputVal = event.target.value;

    if(inputVal.length > 0) {
        labelPassword.style.marginTop = "1px";
    } else {
        labelPassword.style.marginTop = "12px";
    }
} )


    

function SignIn() {

    document.querySelector(".log-in-container").style.scale = "1";
    document.querySelector(".over-lay").style.display = "block";
}

function CloseBTN() {
    document.querySelector(".log-in-container").style.scale = "0";
    document.querySelector(".over-lay").style.display = "none";
}

function toHTML() {
    window.location.replace('HtmlDictionary.html');
}