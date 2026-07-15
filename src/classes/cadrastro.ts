import { Sistema } from "./sistema.js";
import { Usuario } from "./user.js";
import { Familiar } from "./familiar.js";

const sistema = Sistema.carregar();

const formCadastro = document.getElementById("formCadastro") as HTMLFormElement | null;

if (formCadastro) {
    formCadastro.addEventListener("submit", (e: SubmitEvent) => {
        e.preventDefault();

        const tipo = (document.getElementById("cadTipo") as HTMLSelectElement).value;
        const nome = (document.getElementById("cadNome") as HTMLInputElement).value.trim();
        const sobrenome = (document.getElementById("cadSobrenome") as HTMLInputElement).value.trim();
        const email = (document.getElementById("cadEmail") as HTMLInputElement).value.trim();
        const senha = (document.getElementById("cadSenha") as HTMLInputElement).value;
        const telefone = (document.getElementById("cadTelefone") as HTMLInputElement).value.trim();
        const dataNascimento = (document.getElementById("cadDataNascimento") as HTMLInputElement).value;
        const sexo = (document.getElementById("cadSexo") as HTMLSelectElement).value;
        const doencaTexto = (document.getElementById("cadDoenca") as HTMLInputElement).value.trim();

        if (!nome || !email || !senha) {
            alert("Preencha ao menos nome, email e senha.");
            return;
        }

        if (sistema.buscarUsuarioPorEmail(email)) {
            alert("Já existe um usuário cadastrado com esse email.");
            return;
        }
        const doencas: string[] = doencaTexto
            ? doencaTexto
                .split(",")
                .map((d: string) => d.trim())
                .filter(Boolean)
            : [];
        
const id = sistema.proximoId();

const Construtor =
    tipo === "familiar"
        ? Familiar
        : Usuario;

const novoUsuario = new Construtor(
    id,
    nome,
    sobrenome,
    email,
    senha,
    dataNascimento ? new Date(dataNascimento) : new Date(),
    sexo,
    telefone,
    doencas
);
        const emailVinculo = (
            document.getElementById("cadEmailVinculo") as HTMLInputElement
        ).value.trim();
        
        if (emailVinculo !== "") {
            
            const pessoa = sistema.buscarUsuarioPorEmail(emailVinculo);
            
            if (!pessoa) {
                
                alert("Usuário para vínculo não encontrado.");
                
            } else {
                
                if (
                    novoUsuario instanceof Usuario &&
                    pessoa instanceof Familiar
                ) {
                    
                    novoUsuario.adicionarFamiliar(pessoa);
                    
                    pessoa.adicionarUsuario(novoUsuario);
                    
                }
                
                else if (
                    novoUsuario instanceof Familiar &&
                    pessoa instanceof Usuario
                ) {
                    
                    novoUsuario.adicionarUsuario(pessoa);
                    
                    pessoa.adicionarFamiliar(novoUsuario);
                    
                }
                
            }
            
        }
        // ------------------------------
        // CONTINUA O CÓDIGO
        // ------------------------------

        sistema.adicionarUsuario(novoUsuario);

        sistema.salvar();

        alert("Cadastro realizado com sucesso!");

        window.location.href = "telaDeLogin.html";




        sistema.adicionarUsuario(novoUsuario);
        sistema.salvar();

        alert("Cadastro realizado com sucesso! Faça login para continuar.");
        window.location.href = "telaDeLogin.html";
    });
}