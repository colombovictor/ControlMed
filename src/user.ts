export class Usuario{
    idUsuario: number
    nome: string
    sobrenome: string
    private _email: string
    private _senha: string
    private _dataNascimento: Date
    sexo: string
    private _telefone: number
    private _doenca: string[]

    constructor(idUsuario:number, nome:string, _email:string, _senha:string, sobrenome: string, _dataNascimento: Date, sexo:string, _telefone: number, _doenca: string[]){
        this.idUsuario = idUsuario
        this.nome = nome
        this._email = _email
        this._senha = _senha
        this.sobrenome = sobrenome
        this._dataNascimento = _dataNascimento
        this.sexo = sexo
        this._telefone = _telefone
        this._doenca = _doenca
    }

    

}
let usuario:Usuario

