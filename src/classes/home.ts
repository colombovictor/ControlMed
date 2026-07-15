import { Sistema } from "./sistema";

const sistema = Sistema.carregar();
const idUsuario = Number( localStorage.getItem("usuarioLogado")
)
const formLogin = document.getElementById("formLogin")

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").HTMLElement | null

        const senha = document.getElementById("loginSenha").value;

        const usuario = sistema.login(email, senha);

        if (usuario) {
            localStorage.setItem("controlmed_sessao", String(usuario.idUsuario));
            window.location.href = "home.html";
        } else {
            alert("Email ou senha incorretos, ou usuário não cadastrado.");
        }
    });
}