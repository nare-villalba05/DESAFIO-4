function sumarProductos(precioUnitario, cantidadDeseada) {
    
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

let precio = 20;
let cantidad = 56;
let totalCompra = sumarProductos( precio, cantidad);

console.log ("Total gastado del producto es: $" + totalCompra);





