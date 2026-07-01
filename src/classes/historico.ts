import { Medicamento } from "./medicamento";

export class Historico {

    private id: number;
    public medicamento: Medicamento;
    public dataHora: Date;
    public status: string;
    public observacao: string;

    constructor(
        id: number,
        medicamento: Medicamento,
        status: string,
        observacao: string = ""
    ) {

        this.id = id;
        this.medicamento = medicamento;
        this.dataHora = new Date();
        this.status = status;
        this.observacao = observacao;

    }

    public getId(): number {

        return this.id;

    }
    public getDataHora(): Date {

        return this.dataHora;

    }
    public editarStatus(status: string): void {

        this.status = status;

    }

    public mostrarInformacoes(): string {

        return `
    Medicamento: ${this.medicamento.nome}
    Data: ${this.dataHora.toLocaleString()}
    Status: ${this.status}
    Observação: ${this.observacao}
    `;

    }

    public editarObservacao(texto: string): void {

        this.observacao = texto;

    }

}
// let historico = new Historico(
//     1,
//     medicamento,
//     "Tomado",
//     ""
// );
// console.log(historico.mostrarInformacoes());