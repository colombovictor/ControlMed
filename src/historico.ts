import { Medicamento } from "./medicamento";

export class Historico {

    public id: number;
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

    public mostrarInformacoes(): void {

    console.log("Medicamento:", this.medicamento.nome);
    console.log("Data:", this.dataHora);
    console.log("Status:", this.status);

}
public adicionarObservacao(texto: string): void {

    this.observacao = texto;

}

}