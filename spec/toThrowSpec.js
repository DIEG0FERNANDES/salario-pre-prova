describe('Suíte de testes do toThrow', function(){
    var comErro = function () {
        return numero * 10;
    };
    var semErro = function (numero) {
        return numero * 10;
    };

    var somar = function(n1, n2){
        return n1 + n2;
    };
    var multiplicar = function () {
        numero * 10;
    };
    it('deve validar o uso do matcher toThrow', function(){
        expect(comErro).toThrow();
        expect(semErro).not.toThrow();
        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    })
});