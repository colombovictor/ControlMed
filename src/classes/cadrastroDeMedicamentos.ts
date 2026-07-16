import { Sistema } from "./sistema.js";
import { Medicamento } from "./medicamento.js";

const sistema = Sistema.carregar();
const idUsuario = Number(localStorage.getItem("usuarioLogado"));
 ////////////////////////
//  Porque cadastrar um medicamento não faz sentido sem saber de quem é esse medicamento 
//  — o medicamento precisa ser vinculado a um usuário 
if (!idUsuario) {
    alert("Nenhum usuário está logado.");
    window.location.href = "telaDeLogin.html";
    throw new Error("Usuário não está logado.");
}
 
const usuario = sistema.buscarUsuario(idUsuario);
 
if (!usuario) {
    alert("Usuário não encontrado.");
    window.location.href = "telaDeLogin.html";
    throw new Error("Usuário não encontrado.");
}

const formMedicamento = document.getElementById("formMedicamento") as HTMLFormElement | null;
 
if (formMedicamento) {
    formMedicamento.addEventListener("submit", (e: SubmitEvent) => {
        e.preventDefault();
 
        const nome = (document.getElementById("medNome") as HTMLInputElement).value.trim();
        const dosagem = (document.getElementById("medDosagem") as HTMLInputElement).value.trim();
        const estoqueTexto = (document.getElementById("medEstoque") as HTMLInputElement).value;
        const validadeTexto = (document.getElementById("medValidade") as HTMLInputElement).value;
        const horario1 = (document.getElementById("medHorario1") as HTMLInputElement).value;
        const horario2 = (document.getElementById("medHorario2") as HTMLInputElement).value;
 
        if (!nome || !dosagem || !estoqueTexto || !validadeTexto) {
            alert("Preencha nome, dosagem, estoque e validade.");
            return;
        }
 
        const estoque = Number(estoqueTexto);
        const validade = new Date(validadeTexto);
 
        const horarios: string[] = [horario1, horario2].filter(Boolean);
 
        const idMedicamento = usuario.getMedicamentos().length + 1;
 
        const novoMedicamento = new Medicamento(
            idMedicamento,
            nome,
            dosagem,
            estoque,
            validade,
            horarios
        );
 
        usuario.adicionarMedicamento(novoMedicamento);
 
        sistema.salvar();
 
        alert("Medicamento cadastrado com sucesso!");
        window.location.href = "home.html";
    });
}