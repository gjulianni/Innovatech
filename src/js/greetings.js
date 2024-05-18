document.addEventListener("DOMContentLoaded", exibirSaudacao);

function exibirSaudacao() {
    var saudacaoH2 = document.getElementById("greeting");
    var saudacao;
    var horaAtual = new Date().getHours();

    // Recupera os dados do usuário do localStorage
    var dadosUsuario = localStorage.getItem("usuario");

    if (!dadosUsuario) {
        saudacaoH2.textContent = "Erro ao carregar a saudação: Dados do usuário não encontrados";
        return;
    }

    // Converte os dados do usuário de JSON para objeto JavaScript
    dadosUsuario = JSON.parse(dadosUsuario);

    // Extrai o nome do usuário do objeto
    var nomeCompleto = dadosUsuario.nome;
    var primeiroNome = nomeCompleto.split(" ")[0];

    if (horaAtual >= 6 && horaAtual < 12) {
        saudacao = "Bom dia, " + primeiroNome;
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde, " + primeiroNome;
    } else {
        saudacao = "Boa noite, " + primeiroNome;
    }

    saudacaoH2.textContent = saudacao;
}
