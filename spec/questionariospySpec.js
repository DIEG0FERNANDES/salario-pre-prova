describe("Questionario Spy e outros recursos", function () {
    //questão 1
    // O describe permite que os testes tenham uma organização de código refinada em estruturas hierárquicas tornando o código simples de ler, facilitando com que as especificações sejam aninhadas dentro demonstrando como é feito os métodos com a função "it", onde realmente é feito um teste para verificar se de fato o objeto descrito faz tal função.
    // describe("descrição do suíte de teste", function () {
    //     var String = "olá";
    //     // … alguns testes
    //     // describe("método aplicado", function () {
    //     //     // testes relacionados a este método 
    //     //     expect(string)
    //     // });
    //     // describe("outro método aplicado", function () {
    //     //     // testes relacionados a este método
    //     // });
    // });
    //Questão 2 e 3
    // 2.Para que uma suíte de testes seja desabilitada basta modificar o "describe", colocando no inicio da palava a letra "x" :  "xdescribe"
    // 3.Para que uma spec de testes seja desabilitada basta modificar o "it", colocando no inicio da palava a letra "x" :  "xit"
    xdescribe("Desativação de suíte  ou spec", function () {
        var desa;

        beforeEach(function () {
            desa = 0;
            desa += 1;
        });

        xit("vai ser pulado", function () {
            expect(desa).toEqual(1);
        });
    });
    //Questão 4
    // 1. and.throwError
    // Em conjunto com a função spyOn() pode fazer com que a função espiã
    // lance uma exceção quando for chamada, validando a mensagem de erro contida nela
    describe("spyOn", function () {

        it("deve espionar a função e lançar uma exceção", function () {
            var obj = {
                foo: function () {
                    throw new Error("Erro!");
                }
            };
            spyOn(obj, 'foo').and.throwError("Erro!");
            expect(function () {
                obj.foo();
            }).toThrowError("Erro!");
            expect(obj.foo).toHaveBeenCalled();
        });
    });
    // 2.calls.any
    // O método calls.any() é um método auxiliar disponível no framework de testes Jasmine, que pode ser usado em conjunto com a função spyOn() para verificar se a função espiã foi chamada pelo menos uma vez.
    // O método calls.any() retorna true se a função espiã tiver sido chamada pelo menos uma vez e false caso contrário.
    describe("exemplo de calls.any()", function () {
        it("deve verificar se a função espiã foi chamada pelo menos uma vez", function () {
            var obj = {
                foo: function () {
                    console.log("Chamando foo()");
                }
            };
            spyOn(obj, 'foo');
            obj.foo();
            expect(obj.foo.calls.any()).toBe(true);
        });
    });
    // 3.calls.count
    // O método calls.count() retorna o número de vezes que a função espiã foi chamada.
    describe("exemplo de calls.count()", function () {
        it("deve verificar o número de vezes que a função espiã foi chamada", function () {
            var obj = {
                foo: function () {
                    console.log("Chamando foo()");
                }
            };
            spyOn(obj, 'foo');
            obj.foo();
            obj.foo();
            obj.foo();
            expect(obj.foo.calls.count()).toBe(3);
        });
    });
    // 4.calls.argsFor
    // O método calls.argsFor(index) recebe um índice de chamada como argumento e retorna um array contendo os argumentos passados para essa chamada da função espiã.
    describe("exemplo de calls.argsFor()", function () {
        it("deve verificar os argumentos passados para a função espiã", function () {
            var obj = {
                foo: function (a, b) {
                    console.log("Chamando foo() com argumentos", a, "e", b);
                }
            };
            spyOn(obj, 'foo');
            obj.foo(1, "dois");
            obj.foo("três", true);
            expect(obj.foo.calls.argsFor(0)).toEqual([1, "dois"]);
            expect(obj.foo.calls.argsFor(1)).toEqual(["três", true]);
        });
    });
    // 5.Call.allArgs
    // O método calls.allArgs() retorna um array multidimensional contendo todos os argumentos passados para cada chamada da função espiã.
    describe("exemplo de calls.allArgs()", function () {
        it("deve verificar todos os argumentos passados para a função espiã", function () {
            var obj = {
                foo: function (a, b) {
                    console.log("Chamando foo() com argumentos", a, "e", b);
                }
            };
            spyOn(obj, 'foo');
            obj.foo(1, "dois");
            obj.foo("três", true);
            expect(obj.foo.calls.allArgs()).toEqual([[1, "dois"], ["três", true]]);
        });
    });
    // 6.calls.all
    // O método calls.all() retorna um array contendo todas as chamadas da função espiã.Cada elemento do array é um objeto que contém informações sobre a chamada, como os argumentos passados, o valor retornado, etc.
    xdescribe("exemplo de calls.all()", function () {
        it("deve verificar todas as chamadas da função espiã", function () {
            var obj = {
                foo: function (a, b) {
                    console.log("Chamando foo() com argumentos", a, "e", b);
                }
            };
            spyOn(obj, 'foo');
            obj.foo(1, "dois");
            obj.foo("três", true);
            expect(obj.foo.calls.all()).toEqual([
                { object: obj, args: [1, "dois"], returnValue: undefined },
                { object: obj, args: ["três", true], returnValue: undefined }
            ]);
        });
    });
    // 7.calls.mostRecent
    // O método calls.mostRecent() retorna um objeto contendo informações sobre a chamada mais recente da função espiã, como os argumentos passados e o valor retornado.
    describe("exemplo de calls.mostRecent()", function () {
        it("deve verificar a chamada mais recente da função espiã", function () {
            var obj = {
                foo: function (a, b) {
                    console.log("Chamando foo() com argumentos", a, "e", b);
                }
            };
            spyOn(obj, 'foo');
            obj.foo(1, "dois");
            obj.foo("três", true);
            expect(obj.foo.calls.mostRecent().args).toEqual(["três", true]);
        });
    });
    // 8.calls.first
    // O método calls.mostRecent() retorna um objeto contendo informações sobre a chamada mais recente da função espiã, como os argumentos passados e o valor retornado.
    describe("exemplo de calls.mostRecent()", function () {
        it("deve verificar a chamada mais recente da função espiã", function () {
            var obj = {
                foo: function (a, b) {
                    console.log("Chamando foo() com argumentos", a, "e", b);
                }
            };
            spyOn(obj, 'foo');
            obj.foo(1, "dois");
            obj.foo("três", true);
            expect(obj.foo.calls.mostRecent().args).toEqual(["três", true]);
        });
    });
    // 9.calls.reset
    // O método calls.reset() limpa todas as informações de chamadas da função espiã, como os argumentos passados e o valor retornado, permitindo que você comece a monitorar a função novamente a partir do zero.
    describe("exemplo de calls.reset()", function () {
        it("deve resetar as informações de chamadas da função espiã", function () {
            var obj = {
                foo: function (a, b) {
                    console.log("Chamando foo() com argumentos", a, "e", b);
                }
            };
            spyOn(obj, 'foo');
            obj.foo(1, "dois");
            expect(obj.foo.calls.count()).toEqual(1);
            obj.foo("três", true);
            expect(obj.foo.calls.count()).toEqual(2);
            obj.foo.calls.reset();
            expect(obj.foo.calls.count()).toEqual(0);
        });
    });
    // 10.createSpy
    // A função createSpy() retorna uma nova função espiã que pode ser usada da mesma forma que uma função existente para monitorar chamadas, argumentos e valores de retorno.
    describe("exemplo de createSpy()", function () {
        it("deve criar uma nova função espiã", function () {
            var spy = jasmine.createSpy('mySpy');
            spy(1, "dois");
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.first().args).toEqual([1, "dois"]);
        });
    });
    // 11.createSpyObj
    // A função createSpyObj() recebe dois argumentos: um nome para o objeto e um array de strings que representam os nomes das funções que serão espiãs.A função createSpyObj() retorna um objeto com as funções espiãs criadas e nomeadas com base nos nomes fornecidos no array de strings.
    describe("Exemplo de createSpyObj()", function () {
        it("deve criar um novo objeto com funções espiãs", function () {
            const obj = jasmine.createSpyObj('myObj', ['foo', 'bar']);
            obj.foo(1, "dois");
            obj.bar();
            expect(obj.foo).toHaveBeenCalled();
            expect(obj.bar).toHaveBeenCalled();
            expect(obj.foo.calls.first().args).toEqual([1, "dois"]);
        });     
    });
});