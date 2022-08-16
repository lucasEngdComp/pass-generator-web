let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePass = document.querySelector("#valor")
let password = document.querySelector("#password")
let containerPass = document.querySelector("#container-password")
let charset ="abcdefghijklmnopqrstuvwxyzABCDEZHIKLMNOPQRSTVX!@#$%&*()_+=123456789"
let novaSenha= "";

sizePass.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizePass.innerHTML = this.value;
}


function generatePass(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value;++i){
        pass+=charset.charAt(Math.floor(Math.random() * n));

    }
    containerPass.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copy(){
    alert("Senha copiada")
    navigator.clipboard.writeText(novaSenha);
}
