const form = document.getElementById('form');
const resultadoHTML = document.getElementById('resultado');
const horasTrabalhadasHTML = document.getElementById('quantidade-horas-trabalhadas');
const valorSalarioMinimoHTML = document.getElementById('valor-salario-minimo');
const valorGanhoPorHoraHTML = document.getElementById('valor-ganho-por-hora');
const valorGanhoPorHoraExtraHTML = document.getElementById('valor-ganho-por-hora-extra');
const horasMensaisHTML = document.getElementById('horas-mensais');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const horasTrabalhadas = Number(event.target.horas.value);
    const valorSalarioMinimo = Number(event.target.salario.value);

    if (!horasTrabalhadas || horasTrabalhadas < 0 || !valorSalarioMinimo || valorSalarioMinimo < 0) {
        alert('A entrada está inválida.');
        return;
    }

    const [valorGanhoPorHora, valorGanhoPorHoraExtra] = calculaValorPorHora(horasTrabalhadas, valorSalarioMinimo);

    const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const formatador = numberFormat.format;

    resultadoHTML.style.display = 'block';
    horasTrabalhadasHTML.innerText = horasTrabalhadas;
    valorSalarioMinimoHTML.innerText = formatador(valorSalarioMinimo);
    valorGanhoPorHoraHTML.innerText = formatador(valorGanhoPorHora);
    valorGanhoPorHoraExtraHTML.innerText = formatador(valorGanhoPorHoraExtra);
    horasMensaisHTML.innerText = horasTrabalhadas * 5;
});