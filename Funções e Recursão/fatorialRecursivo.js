/**Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. */

function fatorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error("O fatorial só é definido para números inteiros.");
  }

  if (n < 0) {
    throw new Error("Fatorial não é definido para números negativos.");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

function mostrarFatorial(n) {
  try {
    const resultado = fatorial(n);
    console.log(`!${n} = ${resultado}`);
  } catch (erro) {
    console.log(erro.message);
  }
}

mostrarFatorial(5);   
mostrarFatorial(0);   
mostrarFatorial(-3); 
mostrarFatorial(3.5); 
mostrarFatorial("abc"); 