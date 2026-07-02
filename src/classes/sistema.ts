import { Usuario } from "./user";
import { Familiar } from "./familiar";

export class Sistema {

    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

  
    // USUÁRIOS
  

    public adicionarUsuario(usuario: Usuario): void {

        if (this.buscarUsuario(usuario.idUsuario)) {
            console.log("Usuário já cadastrado.");
            return;
        }

        this.usuarios.push(usuario);
        console.log("Usuário cadastrado com sucesso.");
    }

    public removerUsuario(idUsuario: number): void {

        const usuario = this.buscarUsuario(idUsuario);

        if (!usuario) {
            console.log("Usuário não encontrado.");
            return;
        }

        this.usuarios = this.usuarios.filter(
            usuario => usuario.idUsuario !== idUsuario
        );

        console.log("Usuário removido com sucesso.");
    }

    public buscarUsuario(idUsuario: number): Usuario | undefined {

        return this.usuarios.find(
            usuario => usuario.idUsuario === idUsuario
        );

    }

    public listarUsuarios(): void {

        if (this.usuarios.length === 0) {
            console.log("Nenhum usuário cadastrado.");
            return;
        }

        console.log("===== USUÁRIOS =====");

        this.usuarios.forEach(usuario => {
            console.log(usuario.mostrarInformacoes());
        });

    }

  
    // LOGIN
  

    public login(email: string, senha: string): Usuario | undefined {

        const usuario = this.usuarios.find(
            usuario => usuario.login(email, senha)
        );

        if (!usuario) {
            console.log("Login inválido.");
            return undefined;
        }

        return usuario;
    }

  
    // FAMILIARES
  

    public listarFamiliares(): void {

        const familiares = this.usuarios.filter(
            usuario => usuario instanceof Familiar
        );

        if (familiares.length === 0) {

            console.log("Nenhum familiar cadastrado.");
            return;

        }

        console.log("===== FAMILIARES =====");

        familiares.forEach(familiar => {

            console.log(familiar.mostrarInformacoes());

        });

    }

    public buscarFamiliar(idUsuario: number): Familiar | undefined {

        const usuario = this.buscarUsuario(idUsuario);

        if (usuario instanceof Familiar) {

            return usuario;

        }

        return undefined;

    }

  
    // ESTATÍSTICAS
  

    public quantidadeUsuarios(): number {

        return this.usuarios.length;

    }

    public quantidadeFamiliares(): number {

        return this.usuarios.filter(
            usuario => usuario instanceof Familiar
        ).length;

    }

}
let sistema = new Sistema()
const usuario = new Usuario(
    1,
    "Maria",
    "Silva",
    "maria@email.com",
    "123456",
    new Date("1955-03-10"),
    "Feminino",
    "(11)99999-9999",
    ["Hipertensão"]
);
sistema.adicionarUsuario(usuario)

const familiar = new Familiar(
    2,
    "João",
    "Silva",
    "joao@email.com",
    "654321",
    new Date("1995-08-20"),
    "Masculino",
    "(11)98888-8888",
    []
);

sistema.adicionarUsuario(familiar);