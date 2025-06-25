/**Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. */

const produtos = [
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 100 },
  { nome: 'Monitor', preco: 800 },
  { nome: 'Webcam', preco: 200 },
  {nome: 'CPU', preco: 2000},
  {nome: 'Caneta', preco: 5.60},
  { nome: 'Fone de Ouvido', preco: 150 }
];

function nomesOrdenadosPorPreco(produtos) {
  return [...produtos]
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const nomes = nomesOrdenadosPorPreco(produtos);
console.log(nomes);
