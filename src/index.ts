import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Venda from "./Venda";
import Produto from "./Produto";

let endereco1 : Endereco = new Endereco("Avenida Helvétia", 1104, "Guarapuava", 1);
let produto1: Produto = new Produto(1, "Camiseta Azul", 29.90 );
let produto2: Produto = new Produto(2, "Calça Jeans", 79.99);
let produto3: Produto = new Produto(3, "Tênis Branco", 99.90);
let produto4: Produto = new Produto(4, "Jaqueta de Couro", 199.99);
let telefone1: Telefone = new Telefone("42", 987654321, 1);
let telefone2: Telefone = new Telefone("42", 36255555, 0);
let cliente1: Cliente = new Cliente("Israel", 8256854944, 140401, 0, endereco1, [telefone1, telefone2]);
let venda1 : Venda = new Venda(1, 11062023, cliente1, [produto1, produto2])
let venda2 : Venda = new Venda(2, 12062023, cliente1,[produto3, produto4])

console.log(venda1.calcularTotal());
console.log(venda2.calcularTotal());











