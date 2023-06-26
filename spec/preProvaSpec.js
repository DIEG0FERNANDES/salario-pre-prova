const calculaValorPorHora = require('./../src/js/calculo');

describe('Testes sobre a calculadora salarial', () => {
  it('deve calcular o valor em reais ganho por horas trabalhadas', () => {
    const horasRegularesTrabalhadas = 44;
    const valorSalarioMinimo = 1320;
    
    const [valorPorHora] = calculaValorPorHora(horasRegularesTrabalhadas, valorSalarioMinimo);
    
    expect(valorPorHora).toBe(6);
  });

  it('deve calcular o valor em reais ganho por horas extra trabalhadas', () => {
    const horasRegularesTrabalhadas = 44;
    const valorSalarioMinimo = 1320;
    
    const [, valorPorHoraExtra] = calculaValorPorHora(horasRegularesTrabalhadas, valorSalarioMinimo);
    
    expect(valorPorHoraExtra).toBe(9);
  });

  it('não deve efetuar o cálculo caso o número de horas trabalhadas seja nulo ou inválido', () => {
    const horasRegularesTrabalhadas = 'horas';
    const valorSalarioMinimo = 1320;
    
    expect(() => calculaValorPorHora(horasRegularesTrabalhadas, valorSalarioMinimo))
      .toThrowError('O valor de horas trabalhadas precisa ser um número.');
  });

  it('não deve efetuar o cálculo caso o valor do salário mínimo seja nulo ou inválido', () => {
    const horasRegularesTrabalhadas = 44;
    const valorSalarioMinimo = 'salario';
    
    expect(() => calculaValorPorHora(horasRegularesTrabalhadas, valorSalarioMinimo))
      .toThrowError('O valor do salário mínimo precisa ser um número.');
  });

  it('não deve efetuar o cálculo caso o número de horas trabalhadas seja neutro ou negativo', () => {
    const horasRegularesTrabalhadas = -44;
    const valorSalarioMinimo = 1320;
    
    expect(() => calculaValorPorHora(horasRegularesTrabalhadas, valorSalarioMinimo))
      .toThrowError('O valor de horas trabalhadas precisa ser um número positivo.');
  });

  it('não deve efetuar o cálculo caso o valor do salário mínimo seja neutro ou negativo', () => {
    const horasRegularesTrabalhadas = 44;
    const valorSalarioMinimo = -1320;
    
    expect(() => calculaValorPorHora(horasRegularesTrabalhadas, valorSalarioMinimo))
      .toThrowError('O valor do salário mínimo precisa ser um número positivo.');
  });
});