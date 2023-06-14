enum ESTADO{
    PR,
    SP,
    SC,
    RS,
    MG,
    RJ
}


export default class Endereco {
    private _rua : String;
    private _numero : number;
    private _cidade : String;
    private _estado : ESTADO

    constructor (rua: String, numero: number, cidade: String, estado: ESTADO){
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

    get estado() : ESTADO {
        return this._estado;
    }

    set estado(estado: ESTADO){
        this._estado = estado;
    } 

}
