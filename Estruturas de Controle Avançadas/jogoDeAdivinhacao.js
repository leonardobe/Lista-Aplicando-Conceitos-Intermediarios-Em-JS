/**Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;

console.log("🎯 Adivinhe o número de 1 a 100!");
console.log("Digite 0 para sair do jogo a qualquer momento.\n");

while (true) {
  tentativa = parseInt(prompt("Seu palpite: "));
  
  if (tentativa === 0) {
    console.log("👋 Você saiu do jogo. Até a próxima!");
    break;
  }

  if (isNaN(tentativa)) {
    console.log("❌ Entrada inválida. Digite um número.");
    continue;
  }

  tentativas++;

  if (tentativa === numeroSecreto) {
    console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
    break;
  } else if (tentativa < numeroSecreto) {
    console.log("📈 Mais alto!");
  } else {
    console.log("📉 Mais baixo!");
  }
}
