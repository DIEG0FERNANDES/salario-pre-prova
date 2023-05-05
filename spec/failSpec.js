describe('Testa a função fail',function(){
    var operacao = function(deveExecutar, callBack){
        if(deveExecutar){
            callBack();
        }
    };
    it('não deve executar a função de callBack',function(){
        operacao(false, function(){
            fail('Função callBack foi executada');
        });
    });
});