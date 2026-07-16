import { Usuario } from "./user.js";
import { Familiar } from "./familiar.js";

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
    public buscarUsuarioPorEmail(email: string): Usuario | undefined {

    return this.usuarios.find(usuario =>
        usuario.getEmail().toLowerCase() === email.toLowerCase()
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
public salvar(): void {

    localStorage.setItem(
        "controlmed",
        JSON.stringify(this.usuarios)
    );

}
public static carregar(): Sistema {
    const sistema = new Sistema();
    const dados = localStorage.getItem("controlmed");

    if (dados) {
        const brutos: any[] = JSON.parse(dados);

        sistema.usuarios = brutos.map((u) => {
            // Familiar tem o campo "usuariosAcompanhados", Usuario comum não tem
            const ehFamiliar = "usuariosAcompanhados" in u;

            const instancia = ehFamiliar
                ? new Familiar(0, "", "", "", "", new Date(), "", "", [])
                : new Usuario(0, "", "", "", "", new Date(), "", "", []);

            // copia todos os dados salvos por cima da instância "vazia"
            Object.assign(instancia, u);

            // datas viram string no JSON, precisa converter de volta
            (instancia as any)._dataNascimento = new Date(u._dataNascimento);

            return instancia;
        });
    }

    return sistema;
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
    public proximoId(): number {

    if (this.usuarios.length === 0) {
        return 1;
    }

    const maiorId = Math.max(
        ...this.usuarios.map(usuario => usuario.idUsuario)
    );

    return maiorId + 1;

}

}
// let sistema = new Sistema()
// const usuario = new Usuario(
//     1,
//     "Maria",
//     "Silva",
//     "maria@email.com",
//     "123456",
//     new Date("1955-03-10"),
//     "Feminino",
//     "(11)99999-9999",
//     ["Hipertensão"]
// );
// sistema.adicionarUsuario(usuario)

// const familiar = new Familiar(
//     2,
//     "João",
//     "Silva",
//     "joao@email.com",
//     "654321",
//     new Date("1995-08-20"),
//     "Masculino",
//     "(11)98888-8888",
//     []
// );

// sistema.adicionarUsuario(familiar);