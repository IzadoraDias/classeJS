class Mulher{
  constructor (nome, signo, cor_do_cabelo, etnia)
  {
  this.nome = nome
  this.altura = 0.4
  this.signo = signo
  this.cor_do_cabelo = cor_do_cabelo
  this.id_genero= "F"
  this.etnia = etnia
  this.profissao = []
  }

  pintar_o_cabelo (cor) {
    this.cor_do_cabelo = cor
  } 
  constratar (){
    this.profissao.push(...arguments)
  }
  crescer (){
    let nova_altura = this.altura + 0.01
    this.altura = parseFloat
  }
}

function Mulher(nome, signo, cor_do_cabelo, etnia)
{
this.nome = nome
this.altura = 0.4
this.signo = signo
this.cor_do_cabelo = cor_do_cabelo
this.id_genero= "F"
this.etnia = etnia
this.profissao = []
this.pintar_o_cabelo = function (cor){
  this.cor_do_cabelo = cor
}
  this.constratar = function () {
  this.profissao.push(...arguments)
}
this.crescer = function (){
  let nova_altura = this.altura + 0.01
  this.altura =parseFloat
  (nova_altura.toFixed(2))
}
}


const Izadora = new Mulher ("izadora", "capricornio", "castanho", "negra")

//funciona 
const teste = new Teste ()
function Teste(){
  this.uq = "uq"
}

// nao funciona 
class Teste {
  constructor(){
    this.uq = "uq"
  }
}

//HOSTING