describe('Suíte de testes do toThrowError', function () {
    var calcularDobro = function (numero) {
        if (numero <= 0) {
            throw new TypeError('O número deve ser maior que zero.');
        }
        return numero * numero;
    }
    var somar = function (n1, n2) {
        if (n1 <= 0 || n2 <= 0) {
            throw new TypeError('Deve ser maior que zero');
        }
        return n1 + n2;
    }
    it('deve validar o uso do matcher toThrowError', function () {
        expect(function () { calcularDobro(0) }).toThrowError();
        expect(function () { calcularDobro(0) }).toThrowError('O número deve ser maior que zero.');
        expect(function () { calcularDobro(0) }).toThrowError(/maior que zero/);
        expect(function () { calcularDobro(0) }).toThrowError(TypeError);
        expect(function () { calcularDobro(0) }).toThrowError(TypeError, 'O número deve ser maior que zero.');
        expect(calcularDobro).not.toThrowError();
        expect(function () { somar(0, 0) }).toThrowError();
        expect(function () { somar(1, 1) }).not.toThrowError();
    });
});