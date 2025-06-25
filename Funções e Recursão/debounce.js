/**Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo. */

function debounce(fn, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => { fn.apply(this, args); }, delay);
  };
}

function salvarTexto(texto) {
  console.log(`Salvando: ${texto}`);
}

const salvarComDebounce = debounce(salvarTexto, 1000); // espera 1 segundo sem nova chamada

salvarComDebounce("olá");
salvarComDebounce("olá m");
salvarComDebounce("olá mu");
salvarComDebounce("olá mun");
salvarComDebounce("olá mundo"); // Apenas essa será salva após 1s
