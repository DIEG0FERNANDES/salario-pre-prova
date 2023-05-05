describe('Suíte de teste do afterEach', function(){
    var contador = 0;
    beforeEach(function(){
        contador++;
    });
    afterEach(function(){
        contador = 0;
    });
    it('deve incrementar o contador para 1', function(){
        expect(contador).toEqual(1);
    });
    it('deve reinicializar o contador para 1', function(){
        expect(contador).toEqual(1);
    });
});