let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringtest: string = 'verificar'
stringtest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
stringTest2 === unknownValor;


if (typeof unknownValor == 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never { // never - roda sem fim / void - não retorna
    throw{error: erro, code: codigo};
}

jogaErro('deu erro', 500)

