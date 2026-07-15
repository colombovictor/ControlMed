import { Sistema } from "./sistema";

const sistema = Sistema.carregar();

const formLogin = document.getElementById("formLogin") as HTMLFormElement | null;

if (formLogin) {

    formLogin.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = (
            document.getElementById("loginEmail") as HTMLInputElement
        ).value.trim();

        const senha = (
            document.getElementById("loginSenha") as HTMLInputElement
        ).value;

        if (!email || !senha) {

            alert("Preencha todos os campos.");

            return;

        }

        const usuario = sistema.login(email, senha);

        if (usuario) {

            localStorage.setItem(
                "usuarioLogado",
                String(usuario.idUsuario)
            );

            window.location.href = "home.html";

        } else {

            alert("Email ou senha incorretos.");

            (
                document.getElementById("loginSenha") as HTMLInputElement
            ).value = "";

        }

    });

}