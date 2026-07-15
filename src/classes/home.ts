import { Sistema } from "./sistema.js";

const sistema = Sistema.carregar();

const idUsuario = Number(localStorage.getItem("usuarioLogado"));

if (!idUsuario) {

    alert("Nenhum usuário está logado.");

    window.location.href = "telaDeLogin.html";

    throw new Error("Usuário não está logado.");

}

const usuario = sistema.buscarUsuario(idUsuario);

if (!usuario) {

    if (!usuario) {
    alert("Usuário não encontrado.");

    localStorage.removeItem("usuarioLogado"); 

    window.location.href = "telaDeLogin.html";

    throw new Error("Usuário não encontrado.");
}

}
const txtBoasVindas = document.getElementById("txtBoasVindas");

if (txtBoasVindas) {

    txtBoasVindas.textContent =
        `Bem-vindo(a), ${usuario.nome}! 👋`;

}

// /////////////////////////////////////////////////
// const sessaoId = localStorage.getItem("controlmed_sessao");

// if (!sessaoId) {
//     window.location.href = "telaDeLogin.html";
// } else {
//     const usuarioLogado = sistema.buscarUsuario(Number(sessaoId));

//     if (!usuarioLogado) {
//         // Sessão inválida (usuário não existe mais nos dados salvos)
//         localStorage.removeItem("controlmed_sessao");
//         window.location.href = "telaDeLogin.html";
//     } else {
//         const boasVindas = document.querySelector(".topbar p");
//         if (boasVindas) {
//             boasVindas.textContent = `Bem-vindo(a), ${usuarioLogado.nome}!`;
//         }     
//     }
// }    

///////////////////////////////////

// ===============================
// DADOS DO USUÁRIO
// ===============================

const txtNome = document.getElementById("txtNome");

if (txtNome) {
    txtNome.textContent = `${usuario.nome} ${usuario.sobrenome}`;
}

const txtEmail = document.getElementById("txtEmail");

if (txtEmail) {
    txtEmail.textContent = usuario.getEmail();
}

const txtTelefone = document.getElementById("txtTelefone");

if (txtTelefone) {
    txtTelefone.textContent = usuario.getTelefone();
}

const txtQuantidadeMedicamentos = document.getElementById("txtQuantidadeMedicamentos");

if (txtQuantidadeMedicamentos) {
    txtQuantidadeMedicamentos.textContent =
        usuario.quantidadeMedicamentos().toString();
}

const txtQuantidadeHistorico = document.getElementById("txtQuantidadeHistorico");

if (txtQuantidadeHistorico) {
    txtQuantidadeHistorico.textContent =
        usuario.quantidadeHistoricos().toString();
}

// ===============================
// LOGOUT
// ===============================

const btnSair = document.getElementById("btnSair");

if (btnSair) {

    btnSair.addEventListener("click", () => {

        localStorage.removeItem("usuarioLogado");

        window.location.href = "telaDeLogin.html";

    });

}