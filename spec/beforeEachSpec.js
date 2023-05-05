describe('Suíte de teste do beforeEach', function(){
    var contador = 0;
    beforeEach(function(){
        contador++;
    });
    it('deve incrementar o contador para 1', function(){
        expect(contador).toEqual(1);
    });
    it('deve incrementar o contador para 2', function(){
        expect(contador).toEqual(2);
    });
});