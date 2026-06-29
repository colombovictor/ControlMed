export function Medicamentos():void{
    class Medicamento {
    id: number
    nome: string
    dosagem: string
    estoque: number
    horarios: string[]
    tomadoHoje: boolean = false

    constructor(id:number, nome:string, dosagem:string, estoque:number, horarios: string[], tomadoHoje: boolean){
        this.id = id
        this.nome = nome
        this.dosagem =dosagem
        this.estoque = estoque
        this.horarios = horarios
        this.tomadoHoje = tomadoHoje
    }
    tomar(){
        this.estoque--
        this.tomadoHoje = true
    }
    alterar_Estoque(estque:number){
        this.estoque = Number(prompt(`Infome a nova quantidade do estoque: `))
    }
    verificar_Estoque(estoque:number){
        if (this.estoque <= 5){
            console.log(`Estoque baixo
    Quantidade em estoque: ${this.estoque}`)
        }else{
            console.log(`Quantidade em estoque: ${this.estoque}`)
        }
    }



    alterar_Horario(horarios: string){
        this.horarios[0] = String(prompt(`Informe o nova hora: `))
        this.horarios[1] = String(prompt(`Informe a nova minutagem: `))
    }
    alterar_dosagem(dosagem:string){
        this.dosagem = String(prompt(`Informe a nova dosagem: `))
    }
}

}