let aleatorio = Math.floor(Math.random() * 50) + 1;
let tentativas = 0;

document.getElementById("verificar").addEventListener("click", function() {
    let palpite = Number(document.getElementById("tentativa").value);
    let msg = document.getElementById("resultado");
    tentativas++;

    document.getElementById("tentativas").textContent = "Tentativas: " + tentativas;

    if (palpite === aleatorio) {
        msg.textContent = `Parabéns, o número era ${aleatorio}!`;
        msg.className = 'sucesso';
    } else if (palpite < aleatorio) {
        msg.textContent = `O número é maior que ${palpite}. Tente novamente!`;
        msg.className = 'erro';
    } else if (palpite > aleatorio) {
        msg.textContent = `O número é menor que ${palpite}. Tente novamente!`;
        msg.className = 'erro';
    } else {
        msg.textContent = 'Por favor, insira um número válido.';
        msg.className = 'erro';
    }
});

// Altera entre modo escuro e normal
document.getElementById('toggle-dark').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

