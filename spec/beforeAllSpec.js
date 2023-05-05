describe('Suíte de teste do beforeAll', function(){
    var contador = 0;
    beforeEach(function(){
        contador=0;
    });
    beforeEach(function(){
        contador ++;
    });
    it('deve exibir o contador como 11', function(){
        expect(contador).toEqual(11);
    });
    it('deve reinicializar o contador para 1', function(){
        expect(contador).toEqual(12);
    });
});