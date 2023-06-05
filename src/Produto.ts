export default class Produto {
    private _codigo: number;
    private _descricao: String;
    private _valor: number;

    constructor(codigo: number, descricao: String, valor: number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }

    get codigo() : number {
        return this._codigo;
    }

    set codigo(codigo: number){
        this._codigo = codigo;
    } 

    get descricao() : String {
        return this._descricao;
    }

    set descricao(descricao: String){
        this._descricao = this.descricao;
    } 

    get valor() : number {
        return this._valor;
    }

    set valor(valor: number){
        this._valor = valor;
    } 
}