const productos = [
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Mouse", precio: 300 },
    { nombre: "Teclado", precio: 800 },
    { nombre: "Monitor", precio: 4500 },
    { nombre: "Audífonos", precio: 1200 }
];

const productoscaros = productos.filter(function(producto){
    return producto.precio >= 1000;
});

const nombreproducto = productos.map(function(nombre){
    return nombre.nombre
});

const productoencontrado = productos.find(function(encontrado){
    return encontrado.nombre === "Teclado";
});

console.log(productoscaros);
console.log(nombreproducto);
console.log(productoencontrado);