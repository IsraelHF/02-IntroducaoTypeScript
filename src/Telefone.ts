enum TELEFONE{
    Residencial,
    Pessoal
}

export default class Telefone{
    private _ddd: String;
    private _numero: number;
    private _tipo: TELEFONE;

    constructor(ddd: String, numero: number, tipo: TELEFONE){
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

    get tipo() : TELEFONE {
        return this._tipo;
    }

    set tipo(tipo: TELEFONE){
        this._tipo = tipo;
    } 

}