let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#senha");

const containerPassword = document.querySelector("#container-password");

let caracter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function geradorDeSenha() {
    let senha = "";
    for (let i = 0, n = caracter.length; i < sliderElement.value; ++i){
        senha += caracter.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = senha;
    novaSenha = senha;
}

function copiarSenha() {
    alert("senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}