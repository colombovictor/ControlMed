import { Sistema } from "./sistema.js";
import { Familiar } from "./familiar.js";
 
const sistema = Sistema.carregar()
 
const idUsuario = Number(localStorage.getItem("usuarioLogado"))
 
if (!idUsuario) {
    alert("Nenhum usuário está logado.")
    window.location.href = "telaDeLogin.html"
    throw new Error("Usuário não está logado.")
}
 
const usuario = sistema.buscarUsuario(idUsuario)
console.log(usuario)
console.log(document.getElementById("perfilNome"))
 
if (!usuario) {
    alert("Usuário não encontrado.")
    localStorage.removeItem("usuarioLogado")
    window.location.href = "telaDeLogin.html"
    throw new Error("Usuário não encontrado.")
}
 

// DADOS DO USUÁRIO

 
const txtNomeCompleto = document.getElementById("txtNomeCompleto");
if (txtNomeCompleto) {
    txtNomeCompleto.textContent = `${usuario.nome} ${usuario.sobrenome}`;
}
 
(document.getElementById("perfilNome") as HTMLElement).textContent =
    usuario.nome;

(document.getElementById("perfilSobrenome") as HTMLElement).textContent =
    usuario.sobrenome || "Não informado";

(document.getElementById("perfilEmail") as HTMLElement).textContent =
    usuario.getEmail();

(document.getElementById("perfilTelefone") as HTMLElement).textContent =
    usuario.getTelefone() || "Não informado";

(document.getElementById("perfilSexo") as HTMLElement).textContent =
    usuario.sexo;

(document.getElementById("perfilNascimento") as HTMLElement).textContent =
    usuario.getDataNascimento().toLocaleDateString() || "Não informado";;

(document.getElementById("perfilDoencas") as HTMLElement).textContent =
    usuario.getDoenca().length > 0
        ? usuario.getDoenca().join(", ")
        : "Nenhuma doença cadastrada";

(document.getElementById("perfilTipo") as HTMLElement).textContent =
    usuario instanceof Familiar
        ? "Familiar"
        : "Paciente";
 

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

 
const btnSair = document.getElementById("btnSair")
 
if (btnSair) {
    btnSair.addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado")
        window.location.href = "telaDeLogin.html"
    })
}
 