/**Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. */

let texto = "olá olá mundo mundo mundo olá ola mundooo MUNDO ola";
let palavras = texto.toLowerCase().split(" "); // tudo minúsculo e separado por espaço
let unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  let encontrada = false;

  for (let j = 0; j < unicas.length; j++) {
    if (palavra === unicas[j]) {
      encontrada = true;
      break;
    }
  }

  if (!encontrada) {
    unicas.push(palavra);
  }
}

console.log(unicas);
