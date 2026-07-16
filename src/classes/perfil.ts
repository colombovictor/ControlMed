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
    alert("Usuário não encontrado.");
    localStorage.removeItem("usuarioLogado");
    window.location.href = "telaDeLogin.html";
    throw new Error("Usuário não encontrado.");
}
 

// DADOS DO USUÁRIO

 
const txtNomeCompleto = document.getElementById("txtNomeCompleto");
if (txtNomeCompleto) {
    txtNomeCompleto.textContent = `${usuario.nome} ${usuario.sobrenome}`;
}
 
const txtEmail = document.getElementById("txtEmail");
if (txtEmail) {
    txtEmail.textContent = usuario.getEmail();
}
 
const Telefone = document.getElementById("Telefone");
if (Telefone) {
    Telefone.textContent = usuario.getTelefone() || "Não informado";
}
 
const txtSexo = document.getElementById("txtSexo");
if (txtSexo) {
    txtSexo.textContent = usuario.sexo || "Não informado";
}
 
const txtDataNascimento = document.getElementById("txtDataNascimento");
if (txtDataNascimento) {
    const data = usuario.getDataNascimento();
    txtDataNascimento.textContent = data
        ? new Date(data).toLocaleDateString("pt-BR")
        : "Não informado";
}
 
const txtDoencas = document.getElementById("txtDoencas");
if (txtDoencas) {
    const doencas = usuario.getDoenca();
    txtDoencas.textContent =
        doencas && doencas.length > 0 ? doencas.join(", ") : "Nenhuma informada";
}
 

// RESUMO

 
const txtQuantidadeMedicamentos = document.getElementById("txtQuantidadeMedicamentos");
if (txtQuantidadeMedicamentos) {
    txtQuantidadeMedicamentos.textContent = usuario.quantidadeMedicamentos().toString();
}
 
const txtQuantidadeHistorico = document.getElementById("txtQuantidadeHistorico");
if (txtQuantidadeHistorico) {
    txtQuantidadeHistorico.textContent = usuario.quantidadeHistoricos().toString();
}
 
const txtQuantidadeFamiliares = document.getElementById("txtQuantidadeFamiliares");
if (txtQuantidadeFamiliares) {
    txtQuantidadeFamiliares.textContent = usuario.getFamiliar().length.toString();
}
 

// LOGOUT

 
const btnSair = document.getElementById("btnSair");
 
if (btnSair) {
    btnSair.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        window.location.href = "telaDeLogin.html";
    });
}
 