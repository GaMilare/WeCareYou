export class UsuarioModel{
    nome: string;
    isPrestador: boolean;
    email: string;
    cpf: string;
    coren: string;
    celular: string;
    senha: string;
    senhaConfirmacao: string;
    servicos: {};
    localizacao: {};
    dadosPagamento: {};
    ativo: boolean;
    _id:string;
}

export class UsuarioViewModel{
    cliente_nome: string;
    prestador_nome: string;
    isPrestador: string;
    cliente_email: string;
    prestador_email: string;
    prestador_cpf: string;
    cliente_cpf: string;
    coren: string;
    cliente_celular: string;
    prestador_celular: string;
    cliente_senha: string;
    prestador_senha: string;
    cliente_senhaConfirmacao: string;
    prestador_senhaConfirmacao: string;
    prestador_servicos: {};
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
    cep: string;
    pagamentoNome:string
    numeroCartao:string
    dataVencimento:string
    codSeguranca:string
}

// nome: {index:true, required:true, type:String},
//     isPrestador:{type:Boolean, required:true},
//     email:{type:String, required:true},
//     cpf: {type:String, required: true},
//     coren: {type:String},
//     celular: {type:String, required: true},
//     senha:{type:String, required:true},
//     senhaConfirmacao:{type:String, required:true},
//     servicos: {type: Object, required:true},
//     localizacao: {type: Object, required: true},
//     dadosPagamento: {type: Object, required: true},