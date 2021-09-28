let numAleatorio = Math.floor(Math.random() * 11);
console.log(numAleatorio);

function adivinhar() {
    let entrada = document.getElementById("num").value;

    document.getElementById("resultado").innerText = " ";

    if (entrada < 0 || entrada > 10) {
        resultado.innerText = "Coloque um número de 0 a 10!";
    } else if (entrada == numAleatorio) {
        resultado.innerText = "Você acertou. Parabéns!";
    } else if (entrada == "") {
        resultado.innerText = "Por favor, insira um valor!";
    }
     else {
        resultado.innerText = "Sinto muito. Você errou!";
    }
}