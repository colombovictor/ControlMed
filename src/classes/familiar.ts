import { Usuario } from "./user.js"

export class Familiar extends Usuario {

    private usuariosAcompanhados: Usuario[]

    constructor(
        idUsuario: number,
        nome: string,
        sobrenome: string,
        email: string,
        senha: string,
        dataNascimento: Date,
        sexo: string,
        telefone: string,
        doenca: string[]
    ) {

        super(
            idUsuario,
            nome,
            sobrenome,
            email,
            senha,
            dataNascimento,
            sexo,
            telefone,
            doenca
        )

        this.usuariosAcompanhados = []


    }

    public adicionarUsuario(usuario: Usuario): void {

        let existe = this.buscarUsuario(usuario.idUsuario)

        if (existe) {
            console.log("Esse usuário já está sendo acompanhado.")
            return
        }

        this.usuariosAcompanhados.push(usuario)

        console.log(`${usuario.nome} adicionado com sucesso.`)

    }

    public removerUsuario(idUsuario: number): void {

        const usuario = this.buscarUsuario(idUsuario)

        if (!usuario) {
            console.log("Usuário não encontrado.")
            return
        }

        this.usuariosAcompanhados =
            this.usuariosAcompanhados.filter(
                usuario => usuario.idUsuario !== idUsuario
            )

        console.log("Usuário removido com sucesso.")

    }

    public listarUsuarios(): void {

        console.log("Usuários acompanhados:")

        this.usuariosAcompanhados.forEach(usuario => {

            console.log(
                `${usuario.idUsuario} - ${usuario.nome} ${usuario.sobrenome}`
            )

        })

    }

    public buscarUsuario(idUsuario: number): Usuario | undefined {

        return this.usuariosAcompanhados.find(
            usuario => usuario.idUsuario === idUsuario
        )

    }

    public visualizarMedicamentos(idUsuario: number): void {

        const usuario = this.buscarUsuario(idUsuario)

        if (!usuario) {
            console.log("Usuário não encontrado.")
            return
        }

        usuario.listarMedicamentos()

    }
    public verificarPendencias(): void {

        this.usuariosAcompanhados.forEach(usuario => {

            console.log(`Usuário: ${usuario.nome}`);

            usuario.getMedicamentos().forEach(medicamento => {

                if (!medicamento.getTomadoHoje()) {

                    console.log(
                        `${medicamento.nome} ainda não foi tomado.`
                    )

                }

            })

        })

    }

    public visualizarHistorico(idUsuario: number): void {

        const usuario = this.buscarUsuario(idUsuario);

        if (!usuario) {

            console.log("Usuário não encontrado.");

            return;

        }

        usuario.listarHistorico();

    }

}
