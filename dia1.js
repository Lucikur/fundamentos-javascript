const nombre = "Kevin Antonio";
const Objetivo = "desarrollador Fullstack";
const edad = "24";
const lenguaje = "javascript";
const horario = "8 AM a 5 MP";
const Pago_por_hora = 60;
const horas_trabajadas = 48;
const calificacion = 85;
let resultado = "";
const caducidad = "si"

function totalH(){
    let totalH = 0;
    if (horas_trabajadas => 1){
        totalH = (horas_trabajadas * Pago_por_hora);
    }  
    return totalH;
}

function estado(){
    let estado = "";
    if (caducidad == "si"){
        estado = "buen estado";
    }  else {
        resultado = "caducado";
    }
    return estado;
}

function resultados() {
    
      if (calificacion >= 70) {
        resultado = "aprobado";
      } else {
            resultado = "reprobado";
        }
    return resultado;
  }
console.log("se pago un tatal de " + totalH());
console.log("el estado de la leche es "  + estado());
console.log("el alumno ah " + resultados());
console.log("mi nombre es " + nombre);
console.log("mi objetivo es ser " + Objetivo);
console.log("mi horario laborar es de " + horario);
console.log("mi paga por hora es de " + Pago_por_hora + " pesos la hora");
console.log("esta semana trabaje un total de " + horas_trabajadas + " horas trabajadas puff");
