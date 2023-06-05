export default class Telefone{
    private _ddd: String;
    private _numero: number;
    private _tipo: String;

    constructor(ddd: String, numero: number, tipo: String){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd() : String {
        return this._ddd;
    }

    set ddd(ddd: String){
        this._ddd = ddd;
    } 

    get numero() : number {
        return this._numero;
    }

    set numero(numero: number){
        this._numero = numero;
    } 

    get tipo() : String {
        return this._tipo;
    }

    set tipo(tipo: String){
        this._tipo = tipo;
    } 

}