const IVA = 1.21;

class Producto {
    constructor(nombre, precio, color, marca, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.marca = marca;
    this.stock = stock;
}

precioFinal() {
    let final = this.precio * IVA // Le agrega el desgraciado impuesto al producto
    return final
}
}

const producto1 = new Producto(prompt("Ingrese el nombre de un producto"), parseInt(prompt("Ingrese el precio")), prompt("Ingrese el color"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el stock")))

console.log(producto1)
console.log(`Precio final con IVA: ${producto1.precioFinal()}`)

