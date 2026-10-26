const proyectos = ["App SAT", "Tienda en línea", "Sistema de alertas", "Portafolio"];
const proyectosinf = {
    nombre: "App sat",
    tecnologiasw: "reacnative",
    backend: "firebase"
};
const estudiantes = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Luis", calificacion: 60 },
    { nombre: "Carlos", calificacion: 95 }
];

function mostrarResultado(estudiantes){
    if (estudiantes.calificacion >= 70){
        return estudiantes.nombre + " aprobado";
    } else {
        return estudiantes.nombre + " reprobado";
    }

}

console.log("el estuduante " + mostrarResultado(estudiantes[0]));
console.log("el estuduante " + mostrarResultado(estudiantes[1]));
console.log("el estuduante " + mostrarResultado(estudiantes[2]));


function calculartotal(precio, cantidad){
     return precio * cantidad
}

function evaluacion(calificacion){
    if (calificacion >= 70){
        return "aprobado";
    }else {
        return "reporbado"
    } 

}

console.log("el estudiante a " + evaluacion(75))
console.log("el estudiante a " + evaluacion(55))
console.log("ganancia total " + calculartotal(10, 2))
console.log(proyectosinf.nombre)
console.log(proyectosinf.tecnologiasw)
console.log(proyectos[0]);
console.log(proyectos[2]);
console.log(proyectos[proyectos.length - 1]);
