/**Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. */

function ehDataValida(dia, mes, ano) {
  let nomesMes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

  if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
    return `Data inválida!!`;
  }
  if (mes < 1 || mes > 12) {
    return `Mês inválido!!`;
  }

  let diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  if (ehBissexto) {
    diasNoMes[1] = 29;
  }

  let status = ''

  if (dia >= 1 && dia <= diasNoMes[mes - 1]){
    status = 'é data válida'
  }else{
    status = 'é data inválida'
  }

  let nomeMes = nomesMes[mes - 1];

  return `${dia} de ${nomeMes} de ${ano} ${status}`;
}

console.log(ehDataValida(29, 2, 2024)); // 29 de fev de 2024 é data válida
console.log(ehDataValida(29, 2, 2023)); // 29 de fev de 2023 é data inválida
console.log(ehDataValida(31, 4, 2024)); // 31 de abr de 2024 é data inválida
console.log(ehDataValida(15, 8, 2025)); // 15 de ago de 2025 é data válida
