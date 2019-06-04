export class ServicoModel{
    celularCliente: string;
    celularPrestador: string;
    nomeCliente : string;
    statusCliente : string;
    statusPrestador : string;
    hora : string;
    data : string;
    cidade:string;
    endereco : string;
    nomePrestador : string;
    servico : string;
    precoProposta : string;
    precoFinal : string;
    precoMedio : string;
    ativo : boolean;
    clienteId:string;
    prestadorId:string;
    _id: any;
}

export enum ServicoEnumModel{
    aceito =1 ,
    cancelado = 2,
    pendente = 0
}

/// nomeCliente: {index:true, required:true, type:String},
//     statusCliente: {type:String},
//     nomePrestador: {type:String},
//     statusPrestador: {type:String},
//     hora: {type:String},
//     data: {type:String, required: true},
//     endereco: {type:String, required: true},
//     nomePrestador: {type:String},
//     precoProposta: {type:String},
//     precoFinal: {type:String},
//     precoFinal: {type:String},
//     servico: {type:String},
//     ativo: {type: Boolean, required: true},