/**
 * 
 * @param {Number} horasTrabalhadas 
 * @param {Number} valorSalarioMinimo 
 * @returns
 * Retorna os valores em reais por hora trabalhada e por hora extra trabalhada,
 * respectivamente, em um vetor numérico de duas posições
 */

function calculaValorPorHora(horasTrabalhadas = 44, valorSalarioMinimo = 1320) {
  if (typeof horasTrabalhadas !== 'number') {
    throw new Error('O valor de horas trabalhadas precisa ser um número.');
  }

  if (typeof valorSalarioMinimo !== 'number') {
    throw new Error('O valor do salário mínimo precisa ser um número.');
  }

  if (horasTrabalhadas <= 0) {
    throw new Error('O valor de horas trabalhadas precisa ser um número positivo.');
  }

  if (valorSalarioMinimo <= 0) {
    throw new Error('O valor do salário mínimo precisa ser um número positivo.');
  }

  const horasPorMes = horasTrabalhadas * 5;
  const valorPorHora = Number((valorSalarioMinimo / horasPorMes).toFixed(2));
  const valorPorHoraExtra = Number((valorPorHora * 1.5).toFixed(2));
  return [valorPorHora, valorPorHoraExtra];
}

module.exports = calculaValorPorHora;