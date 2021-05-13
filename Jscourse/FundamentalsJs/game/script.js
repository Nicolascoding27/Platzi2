const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego { //va a tener logica del videojuego
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel();
    this.iluminarSecuencia();
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
    this.nivel=1
    this.colores{
        celeste,//si la key tiene el mismo valor del value quedara hecho solo asi 
        violeta,
        naranja,
        verde
    }
  }
  generarSecuencia(){
      this.secuencia = new Array(10).fill(0).map(n=>Math.floor(Math.random()*4))//crear array de 10 0 
  }
  siguienteNivel(){
      this.iluminarSecuencia();
  }
  iluminarSecuencia(){
      for (var i=0;i<this.nivel,i++){

      }
  }
}

function empezarJuego() {
  var juego = new Juego()
}

