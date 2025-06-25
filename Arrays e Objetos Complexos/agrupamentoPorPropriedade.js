/**Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. */

const vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'Bruno', total: 200 },
  { cliente: 'Ana', total: 150 },
  { cliente: 'Carlos', total: 300 },
  { cliente: 'Carlos', total: 100 },
  { cliente: 'Bruno', total: 100 },
  { cliente: 'Ana', total: 100 },
  { cliente: 'Pedro', total: 100 },
  { cliente: 'Eduardo', total: 0 },
];

function totaisPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;
    acumulador[cliente] = (acumulador[cliente] || 0) + total;
    return acumulador;
  }, {});
}

const resultado = totaisPorCliente(vendas);
console.log(resultado);
