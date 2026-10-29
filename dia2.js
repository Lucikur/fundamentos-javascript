const estudiantes = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Luis", calificacion: 60 },
    { nombre: "Carlos", calificacion: 95 }
];
let suma = 0;    
for(let i = 0; i < estudiantes.length; i++ ){
    suma += estudiantes[i].calificacion;
if(i == estudiantes.length){
    suma = suma / estudiantes.length + 1
        console.log("el promedio de los estudiante es " + suma);
    
    }
    }
