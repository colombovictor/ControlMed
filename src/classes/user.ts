import { Medicamento } from "./medicamento.js"
import { Historico } from "./historico.js"
import { Familiar } from "./familiar.js"
export class Usuario {
    idUsuario: number
    nome: string
    sobrenome: string
    private _email: string
    private _senha: string
    private _dataNascimento: Date
    sexo: string
    private _telefone: string
    private _doenca: string[]
    private medicamentos: Medicamento[]
    private historicos: Historico[]
    private familiares: Familiar[];

    constructor(
        idUsuario: number,
        nome: string,
        sobrenome: string,
        email: string,
        senha: string,
        dataNascimento: Date,
        sexo: string,
        telefone: string,
        doenca: string[],
    ) {
        this.idUsuario = idUsuario;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this._email = email;
    this._senha = senha;
    this._dataNascimento = dataNascimento;
    this.sexo = sexo;
    this._telefone = telefone;
    this._doenca = doenca;

    this.medicamentos = [];
    this.historicos = [];
    this.familiares = []; // Inicializa vazio

    }



    public getEmail(): string {

        return this._email

    }
    public getDataNascimento(): Date {
        return this._dataNascimento

    }

    public getDoenca(): string[] {
        return this._doenca

    }
    public getTelefone(): string {

        return this._telefone
    }
    public getFamiliar(): Familiar[] {

        return this.familiares;

    }
    public getMedicamentos(): Medicamento[] {

        return this.medicamentos

    }
    public getHistoricos(): Historico[] {

        return this.historicos

    }

    public setEmail(email: string): void {

        if (email.includes("@")) {

            this._email = email

        }

    }
    public setTelefone(telefone: string): void {

        this._telefone = telefone

    }



    public login(email: string, senha: string): boolean {

        if (this._email === email && this._senha === senha) {

            console.log(`Bem-vindo(a), ${this.nome}!`)

            return true
        }
        else {
            console.log("Email ou senha inválidos.")

            return false
        }
    }

    public logout(): void {

        console.log(`${this.nome} saiu do sistema.`)

    }

    public mostrarInformacoes(): string {

        return `
    Nome: ${this.nome}
    Sobrenome: ${this.sobrenome}
    Email: ${this._email}
    Telefone: ${this._telefone}
    Sexo: ${this.sexo}
    `

    }
    
    public tomarMedicamento(idMedicamento: number): void {

    // Procura o medicamento pelo ID
    const medicamento = this.medicamentos.find(
        medicamento => medicamento.getId() === idMedicamento
    )

   
    if (!medicamento) {

        console.log("Medicamento não encontrado.")

        return

    }

    // Guarda o estoque antes de tentar tomar
    const estoqueAntes = medicamento.getEstoque()

    // Tenta tomar o medicamento
    medicamento.tomar()

    // Se o estoque diminuiu, significa que o medicamento foi tomado
    if (medicamento.getEstoque() < estoqueAntes) {

        const historico = new Historico(
            this.historicos.length + 1,
            medicamento,
            "Tomado"
        )

        this.historicos.push(historico)

        console.log("Histórico registrado com sucesso.")

    }

}

public quantidadeMedicamentos(): number {

    return this.medicamentos.length

}



public quantidadeHistoricos(): number {

    return this.historicos.length

}

    // public vincularFamiliar(familiar: Familiar[]): void {

    //     this.familiares = familiar;

    // }

    public adicionarFamiliar(familiar: Familiar): void {

        if (!this.familiares.includes(familiar)) {
            this.familiares.push(familiar)
        }

    }

    public removerFamiliar(idUsuario: number): void {

        this.familiares = this.familiares.filter(
            familiar => familiar.idUsuario !== idUsuario
        );

    }

    public listarFamiliares(): Familiar[] {

        return this.familiares;

    }



    public adicionarMedicamento(medicamento: Medicamento): void {

        this.medicamentos.push(medicamento)

        console.log(
            `${medicamento.nome} foi adicionado com sucesso.`
        )

    }
    public removerMedicamento(idMedicamento: number): void {

        this.medicamentos = this.medicamentos.filter(
            medicamento => medicamento.getId() !== idMedicamento
        )

    }
    public buscarMedicamento(idMedicamento: number): Medicamento | undefined {

        return this.medicamentos.find(
            medicamento => medicamento.getId() === idMedicamento
        )

    }

    public listarMedicamentos(): void {

        if (this.medicamentos.length === 0) {

            console.log("Nenhum medicamento cadastrado.")

            return

        }

        this.medicamentos.forEach((medicamento) => {

            medicamento.mostrarInformacoes()

        })

    }

    public adicionarHistorico(historico: Historico): void {

        this.historicos.push(historico)

    }
    public listarHistorico(): void {

        if (this.historicos.length === 0) {

            console.log("Nenhum histórico encontrado.");

            return

        }

        console.log(`Histórico de ${this.nome}:`);

        this.historicos.forEach(historico => {

            console.log(historico.mostrarInformacoes())

        })
    }
}

// }
// let usuario = new Usuario(
//     1,
//     "Giovana",
//     "gio@email.com",
//     "123456",
//     "Alves",
//     new Date('9 octub 2010'),
//     "Feminino",
//     "99999 - 9999",
//     ["love"]

// )

// usuario.login("gio@email.com", "123456")
// usuario.logout()
// console.log(usuario.mostrarInformacoes())
