function exibirSaudacao() {
    var saudacaoH2 = document.getElementById("greeting");
    var saudacao;
    var horaAtual = new Date().getHours();


    var nomeUsuario = "Egydio";

    if (horaAtual >= 6 && horaAtual < 12) {
        saudacao = "Bom dia, " + nomeUsuario;
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde, " + nomeUsuario;
    } else {
        saudacao = "Boa noite, " + nomeUsuario;
    }

    
    saudacaoH2.textContent = saudacao;
}

document.addEventListener("DOMContentLoaded", exibirSaudacao);