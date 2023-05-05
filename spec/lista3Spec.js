//Exe1
//Faça uma suíte de teste para validar a soma de dois números fornecidos pelo usuário.
//Valide em outro teste “it” se os números estão entre -1000 e 1000.
describe("Faça uma suíte de teste para validar a soma de dois números fornecidos pelo usuário", function () {
  var n1 = 50;
  var n2 = 50;
  var soma = n1 + n2;
  it("deve validar a soma de dois números", function () {
    expect(soma).toBe(100);
    // expect(soma).toBe(60)
  });
  // var n3 = -1500;
  var n4 = 480;
  it("deve validar se os números estão entre -1000 e 1000", function () {
    // expect(n3).toBeLessThan(1000);
    // expect(n3).not.toBeLessThan(-1000);
    expect(n4).toBeLessThan(1000);
    expect(n4).not.toBeLessThan(-1000);
  });
});
//Exe 2
// Faça uma suíte de teste para validar a média dos alunos da 3ª série, na qual são utilizadas as notas n1, n2, n3 e n4.
// Crie ainda um segundo teste (it) para validar que as notas válidas estão entre 0 e 10.
describe("Faça uma suíte de teste para validar a média dos alunos da 3ª série, na qual são utilizadas as notas n1, n2, n3 e n4", function () {
  var n1 = 6;
  var n2 = 8;
  var n3 = 2;
  var n4 = 3;
  var media = (n1 + n2 + n3 + n4) / 2;
  it("deve validar a média de notas dos alunos", function () {
    expect(media).toBe(9.5);
    // expect(media).toBe(8)
  });
  it("deve estar entre 0 e 10", function () {
    expect(n1).toBeGreaterThan(0);
    expect(n1).toBeLessThan(10);
    expect(n2).toBeGreaterThan(0);
    expect(n2).toBeLessThan(10);
    expect(n3).toBeGreaterThan(0);
    expect(n3).toBeLessThan(10);
    expect(n4).toBeGreaterThan(0);
    expect(n4).toBeLessThan(10);
  });
});
//Exe 3
// Faça uma suíte de teste para validar o estoque médio da equação a seguir:
describe("Faça uma suíte de teste para validar o estoque médio da equação a seguir", function () {
  var qtMin = 10;
  var qtMax = 50;
  var estqMedio = ((qtMin+qtMax) / 2);
  it("deve validar o estoque médio", function () {
    expect(estqMedio).toBe(30);
    // expect(estqMedio).toBe(2);
  });
});
//Exe 4
// Faça uma suíte de teste para validar o novo preço de um produto, sabendo-se que o preço atual sofreu um desconto de 10%.
describe("Faça uma suíte de teste para validar o novo preço de um produto, sabendo-se que o preço atual sofreu um desconto de 10%", function () {
  var valor = 50;
  var desc = 10/100;
  var valF = valor*desc;
  it("deve validar preço final", function () {
    expect(valF).toBe(5);
    // expect(valF).toBe(10);
  });
});
//Exe 5
//Faça uma suíte de teste para validar a quantidade de salários mínimos que um funcionário ganha, a partir das entradas: valor do salário mínimo e o valor do salário de um funcionário. %.
describe("Faça uma suíte de teste para validar a quantidade de salarios minoimo ", function () {
  valMin = 1302;
  valFun = 6510;
  qtSal = valFun/valMin;
  it('deve validar a quantidade de salarios',function() {
    expect(qtSal).toBe(5);
    // expect(qtSal).toBe(8);
  });
});
//Exe6
// Faça uma suíte de teste para converter cm para m.
describe("Faça uma suíte de teste para validar a conversão de cm para m", function () {
  var cm = 150;
  var conv = 100;
  var m = cm / conv
  it('deve validar a conversão de centimetros para metros',function() {
    expect(m).toBe(1.5);
    // expect(conv).toBe(2);
  });
});