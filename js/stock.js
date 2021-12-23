class Auto {
    constructor(modelo, marca, año, precio, imagen, id) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id
    }
}
const auto1 = new Auto("Mobi", "Fiat", 2015, 3200, "fiatmobi.jpg", 001)
const auto2 = new Auto("Uno", "Fiat", 2017, 999, "fiatuno.jpg", 002)
const auto3 = new Auto("500", "Fiat", 2002, 2300, "fiat500.jpg", 003)
const auto4 = new Auto("Argo", "Fiat", 2013, 1200, "fiatargo.jpg", 004)
const auto5 = new Auto("Joy", "Chevrolet", 2021, 5000, "chevroletjoy.jpg", 005)
const auto6 = new Auto("Mustang", "Ford", 2018, 6250, "fordmustang.jpg", 006)
const auto7 = new Auto("Raptor", "Ford", 2020, 1200, "fordraptor.jpg", 007)


let arrayAutos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7]