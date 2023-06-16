import Produto from "./Produto";
import Cliente from "./Cliente";

export default class Venda{
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor (codigo: number, data: number, cliente: Cliente, produtos: Produto[]){
        this._cliente = cliente;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    get codigo() : number {
        return this._codigo;
    }

    set codigo(codigo: number){
        this._codigo = codigo;
    } 

    get data() : number {
        return this._data;
    }

    set data(data: number){
        this._data = data;
    } 

    get cliente() : Cliente {
        return this._cliente;
    }

    set cliente(cliente: Cliente){
        this._cliente = cliente;
    } 
    get produtos() : Produto[] {
        return this._produtos;
    }

    set produtos(produtos: Produto[]){
        this._produtos = produtos;
    } 


    calcularTotal(): number {
        let total = 0;
    
        for (const produto of this._produtos) {
          total += produto.valor;
        }
        
<<<<<<< HEAD
        console.log("O valor da venda foi de R$: ");
        return total;
      }
      
}
=======
        console.log("A valor da venda foi de R$: ");
        return total;
      }
      
}
>>>>>>> 676b45dcaebb14f7867e09ea62828e756c86b4b2
