function mostrarHora(){
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minutos = momentoActual.getMinutes();
  segundos = momentoActual.getSeconds();
  
  imprimirHora = hora + " : " + minutos + " : " + segundos;
  //Salida
  document.getElementById('mostrarHora').innerHTML = imprimirHora;
}