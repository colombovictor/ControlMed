import { Usuario } from "./user";

class Familiar extends Usuario{
    private _responsavel: string
    constructor(idUsuario: number, nome: string, sobrenome: string,_email:string, _senha: string, _dataNascimento:Date, sexo:string, _telefone: number, _doenca: string[], _responsavel:string){
        super(idUsuario, nome, sobrenome, _email, _senha, _dataNascimento, sexo, _telefone, _doenca)
        this._responsavel = _responsavel
    }
    alterarResponsavel(_responsavel: string){
        this._responsavel = String(prompt(`Informe o nome do novo Responsavel pelo do familiar: `))

    }
    set responsavel(_responsavel): string{
        return this._responsavel
    }
    get responsavel(_responsavel:string): string{
        return this._responsavel
    }
}