document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function validateName(){
    let inputName = document.querySelector("#name");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");

    if(valueName == ""){
        errorName.innerHTML = "Name cannot be empty!";
        inputName.style.border = "1px solid red";
        return false;
    }
    else{
        errorName.innerHTML = "";
        inputName.style.border = "1px solid black";
        return true;
    }
}

function validateEmail(){
    let inputEmail = document.querySelector("#Email");
    let valueEmail = inputEmail.value;
    let errorName = document.querySelector("#error-name");

    if(valueName == ""){
        errorName.innerHTML = "Name cannot be empty!";
        inputEmail.style.border = "1px solid red";
        return false;
    }
    else{
        errorName.innerHTML = "";
        inputEmail.style.border = "1px solid black";
        return true;
    }
}

let registerBtn = document.querySelector("#register-btn");
registerBtn.addEventListener("clicl", function(e){
    e.preventDefault();//stop submit

    validateName();
})