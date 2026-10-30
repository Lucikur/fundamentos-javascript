const estudiantes = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Luis", calificacion: 60 },
    { nombre: "Carlos", calificacion: 95 }
];
let suma = 0; 
let estatus = "";   
for(let i = 0; i < estudiantes.length; i++ ){
    suma += estudiantes[i].calificacion;


if(estudiantes[i].calificacion >= 70){
        estatus = "Aprobado"
        console.log("el estudiante ha " + estudiantes[i].nombre + " ha " + estatus);
    } else {
        estatus = "Reprobado"
        console.log("el estudiante ha " + estudiantes[i].nombre + " ha " + estatus);
    }
}
const promedio = suma / estudiantes.length;
console.log("el promedio del grupo es " + promedio);