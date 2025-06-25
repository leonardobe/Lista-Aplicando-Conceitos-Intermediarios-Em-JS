/**Escreva duas funções: paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente e objetoParaPares(obj) faz o inverso, retornando um array de pares. */

function paresParaObjeto(pares) {
  const obj = {};
  for (const [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

const pares = [['nome', 'Pedro'], ['idade', 30]];
const obj = paresParaObjeto(pares);
console.log(obj); 

const novoPares = objetoParaPares(obj);
console.log(novoPares); 
