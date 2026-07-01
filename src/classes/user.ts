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

    constructor(idUsuario: number, nome: string, email: string, senha: string, sobrenome: string, dataNascimento: Date, sexo: string, telefone: string, doenca: string[]) {
        this.idUsuario = idUsuario
        this.nome = nome
        this._email = email
        this._senha = senha
        this.sobrenome = sobrenome
        this._dataNascimento = dataNascimento
        this.sexo = sexo
        this._telefone = telefone
        this._doenca = doenca
    }



    public getEmail(): string {

        return this._email;

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
    public setEmail(email: string): void {

        if (email.includes("@")) {

            this._email = email;

        }

    }

    public setTelefone(telefone: string): void {

        this._telefone = telefone;

    }



    public login(email: string, senha: string): boolean {

        if (this._email === email && this._senha === senha) {

            console.log(`Bem-vindo(a), ${this.nome}!`);

            return true;
        }
        else {
            console.log("Email ou senha inválidos.");

            return false;
        }
    }

    public logout(): void {

        console.log(`${this.nome} saiu do sistema.`);

    }

    public mostrarInformacoes(): string {

        return `
    Nome: ${this.nome}
    Sobrenome: ${this.sobrenome}
    Email: ${this._email}
    Telefone: ${this._telefone}
    Sexo: ${this.sexo}
    `;

    }

    // editarPerfil()


}
let usuario = new Usuario(
    1,
    "Giovana",
    "gio@email.com",
    "123456",
    "Alves",
    new Date("2004-06-29"),
    "Feminino",
    "99999 - 9999",
    ["love"]

);

usuario.login("gio@email.com", "123456");
usuario.logout();
console.log(usuario.mostrarInformacoes());
