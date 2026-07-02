export class Medicamento {
    private _idMedicamento: number
    public nome: string
    public dosagem: string
    public estoque: number
    public validade: Date
    public horarios: string[]
    public tomadoHoje: boolean

    constructor(idMedicamento: number, 
        nome: string, 
        dosagem: string, 
        estoque: number, 
        validade: Date, 
        horarios: string[]) {

        this._idMedicamento = idMedicamento
        this.nome = nome
        this.dosagem = dosagem
        this.estoque = estoque
        this.validade = validade
        this.horarios = horarios
        this.tomadoHoje = false

    }
    public getId(): number {

        return this._idMedicamento

    }
    public getValidade(): Date {
        return this.validade
    }

    public getTomadoHoje(): boolean {
        return this.tomadoHoje
    }
    public getEstoque(): number {

        return this.estoque

    }

    public setValidade(validade: Date): void {
        this.validade = validade

    }

    public estaVencido(): boolean {

        let hoje = new Date()

        return this.validade < hoje

    }

    public tomar(): void {

        if (this.estaVencido()) {

            console.log("Medicamento vencido.")

            return

        }

        if (this.estoque <= 0) {

            console.log("Medicamento sem estoque.")

            return

        }

        else if (this.tomadoHoje) {

            console.log("Medicamento já foi tomado hoje.")

            return

        }

        this.tomadoHoje = true

        this.estoque--

        console.log(`${this.nome} tomado com sucesso.`)

    }

    public estoqueBaixo(): boolean {

        return this.estoque <= 5

    }
    public alterarEstoque(novoEstoque: number): void {
        if (novoEstoque < 0) {
            throw new Error("O estoque não pode ser negativo.")
        }

        this.estoque = novoEstoque
    }

    public editar(nome: string, dosagem: string, horarios: string[],validade:Date): void {

        this.nome = nome
        this.dosagem = dosagem
        this.horarios = horarios
        this.validade = validade

    }
    // deveTomarAgora()

    public resetarDia(): void {

        this.tomadoHoje = false

    }

    public mostrarInformacoes(): string {
        return `
    Nome: ${this.nome}
    Dosagem: ${this.dosagem}
    Estoque: ${this.estoque}
    Validade: ${this.validade.toLocaleDateString()}
    Horários: ${this.horarios.join(", ")}
    `
    }

}
// let medicamento = new Medicamento(1, 'Dorflex', '1g', 10, new Date('09-12-2027'), ['10:30', '22:30'])
// console.log(medicamento.mostrarInformacoes())
// console.log(medicamento.estaVencido())
// medicamento.tomar()


