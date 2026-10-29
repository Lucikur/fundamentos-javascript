const estudiantes = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Luis", calificacion: 60 },
    { nombre: "Carlos", calificacion: 95 }
];
   let estatus = ""; 
for(let i = 0; i < estudiantes.length; i++ ){

if(estudiantes[i].calificacion >= 70){
        estatus = "Aprobado";
        console.log("el estudiante " + estudiantes[i].nombre + " a " + estatus + " con una calificacion de " + estudiantes[i].calificacion);
    } else {
            
    }
    }
