class Mulher {
  constructor(nome, signo, cor_do_cabelo, etnia) {
    this.nome = nome
    this.altura = 0.4
    this.signo = signo
    this.cor_do_cabelo = cor_do_cabelo
    this.id_genero = "F"
    this.etnia = etnia
    this.profissao = []
  }

  pintar_o_cabelo(cor) {
    this.cor_do_cabelo = cor
  }
  constratar() {
    this.profissao.push(...arguments)
  }
  crescer() {
    let nova_altura = this.altura + 0.01
    this.altura = parseFloat
  }
}

function Mulher(nome, signo, cor_do_cabelo, etnia) {
  this.nome = nome
  this.altura = 0.4
  this.signo = signo
  this.cor_do_cabelo = cor_do_cabelo
  this.id_genero = "F"
  this.etnia = etnia
  this.profissao = []
  this.pintar_o_cabelo = function (cor) {
    this.cor_do_cabelo = cor
  }
  this.contratar = function () {
    this.profissao.push(...arguments)
  }
  this.crescer = function () {
    let nova_altura = this.altura + 0.01
    this.altura = parseFloat
      (nova_altura.toFixed(2))
  }
}


const Izadora = new Mulher("izadora", "capricornio", "castanho", "negra")

//funciona 
const teste = new Teste()
function Teste() {
  this.uq = "uq"
}

// nao funciona 
class Teste {
  constructor() {
    this.uq = "uq"
  }
}

//HOSTING

class Ponto {
  constructor(nome, x, y) {
    this.nome = nome
    this.x = x
    this.y = y
  }
  mover_horizontalmente(lado) {
    this.x = (this.x + lado)
    return this.x

  }
  mover_verticalmente(altura) {
    this.y = (this.y + altura)
    return this.y
  }
  mover(distanciaX, distanciaY) {
    this.x += distanciaX
    this.y += distanciaY
    return [this.x, this.y]
  }

  distancia_entre_dois_pontos(outro_ponto) {
    const x1 = this.x
    const y1 = this.y
    const x2 = outro.ponto.x
    const y2 = outro_ponto.y
    return Math.sqrt( (Math.abs( x1 - x2 )) ** 2 + ( Math.abs( y1 - y2 )) ** 2)
  }

}

class Rect {
  constructor(nome, altura, largura, cor, unidade) {
    this.nome = nome
    this.altura = altura
    this.largura = largura
    this.cor = cor
    this.unidade = unidade
  }

  area() {
    return this.altura * this.largura + this.unidade
  }

  center() {
    return [this.altura / 2, this.largura / 2]
  }
}

class Quadrado extends Rect {
  constructor(lado, cor, unidade) {
    super("quadrado", lado, lado, cor, unidade)
    this.textura = x
  }
}

class QuadradoLado10 extends Quadrado {
  constructor(cor, unidade) {
    super(10, cor, unidade)
    this.prop = "value"
  }
}