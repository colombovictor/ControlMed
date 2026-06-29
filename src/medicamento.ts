export class Medicamento {
    private _id: number;
    nome: string;
    dosagem: string;
    estoque: number;
    validade: Date;
    horarios: string[];
    tomadoHoje: boolean;

    constructor(_id: number,nome: string,dosagem: string,estoque: number,validade: Date,horarios: string[])
        {

        this._id = _id;
        this.nome =nome;
        this.dosagem= dosagem;
        this.estoque= estoque;
        this.validade= validade;
        this.horarios = horarios;
        this.tomadoHoje = false;

    }
    public tomar(): void {

        if (this.estoque = 0) {

            console.log("Medicamento sem estoque.");

            return;

        }

        else if (this.tomadoHoje) {

            console.log("Medicamento já foi tomado hoje.");

            return;

        }

        this.tomadoHoje = true;

        this.estoque--;

        console.log(`${this.nome} tomado com sucesso.`);

    }

    public verificarEstoque(): boolean {

        return this.estoque <= 5;

    }
    public alterarEstoque(novoEstoque: number): void {
        if (novoEstoque < 0) {
            throw new Error("O estoque não pode ser negativo.");
        }

        this.estoque = novoEstoque;
    }

    public editar(nome: string,dosagem: string,horarios: string[]): void {

        this.nome = nome;
        this.dosagem = dosagem;
        this.horarios = horarios;

    }

    public resetarDia(): void {

        this.tomadoHoje = false;

    }

    public mostrarInformacoes(): void {

        console.log("Nome:", this.nome);

        console.log("Dosagem:", this.dosagem);

        console.log("Estoque:", this.estoque);

        console.log("Horários:", this.horarios);

    }

}
