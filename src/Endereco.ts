export default class Endereco {
    private _rua : String;
    private _numero : number;
    private _cidade : String;
    private _estado : String

    constructor (rua: String, numero: number, cidade: String, estado: String){
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua() : String {
        return this._rua;
    }

    set rua(rua: String){
        this._rua = rua;
    } 

    get numero() : number {
        return this._numero;
    }

    set numero(numero: number){
        this._numero = numero;
    } 

    get cidade() : String {
        return this._cidade;
    }

    set cidade(cidade: String){
        this._cidade = cidade;
    } 

    get estado() : String {
        return this._estado;
    }

    set estado(estado: String){
        this._estado = estado;
    } 

}