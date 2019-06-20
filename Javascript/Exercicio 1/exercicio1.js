const produtos = [
    { id:1, nome: 'Adidas', price: 200.00, sales: 0.05 },
    { id:3, nome: 'Asics', price: 400.00, sales: 0.1 },
    { id:2, nome: 'Nike', price: 250.00, sales: 0.05 },
    { id:4, nome: 'Kalenji', price: 199.99, sales: 0.05 },
];
 
let resultados = [];


//for(let i = 0; i < produtos.length; i++){
 //   console.log(i + ' ==> ' , produtos[i]);
//}
 console.log(' ====Objetos==== ');
for (let produto of produtos){
    console.log(produto);
}
console.log('   ');

console.log(' ====Ordenar objetos por id==== ');
    produtos.sort(function(a,b){
        return a.id - b.id;
    }
    );

    for(let i of produtos){
            console.log(i);
    }

    console.log('   ');

    console.log(' ====Ordenar objetos por letra==== ');
        produtos.sort(function (a, b){
            return (a.nome > b.nome) ? 1 : ((a.nome < b.nome) ? -1 : 0);
        }
        );

        for(let i of produtos){
            console.log(i);
    }

