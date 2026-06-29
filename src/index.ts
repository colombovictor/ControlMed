class Usuario{
    idUsuario: number
    nome: string
    private _email: string
    private _senha: string
    private _sobrenome: string
    private _data_Nascimento: number
    private _sexo: string
    private _telefone: number
    private _doenca: [] 



    constructor(idUsuario:number, nome:string, _email:string, _senha:string, _sobrenome: string, _data_Nascimento: number, _sexo:string, _telefone: number, _doenca: []){
        this.idUsuario = idUsuario
        this.nome = nome
        this._email = _email
        this._senha = _senha
        this._sobrenome = _sobrenome
        this._data_Nascimento = _data_Nascimento
        this._sexo = _sexo
        this._telefone = _telefone
        this._doenca = _doenca
    }
}