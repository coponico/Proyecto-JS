class Auto {
    constructor(modelo, marca, anio, precio, imagen, id) {
        this.modelo = modelo;
        this.marca = marca;
        this.anio = anio;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id
    }
}
// const auto1 = new Auto("Mobi", "Fiat", 2015, 3200, "fiatmobi.jpg", 001)
// const auto2 = new Auto("Uno", "Fiat", 2017, 999, "fiatuno.jpg", 002)
// const auto3 = new Auto("500", "Fiat", 2002, 2300, "fiat500.jpg", 003)
// const auto4 = new Auto("Argo", "Fiat", 2013, 1200, "fiatargo.jpg", 004)
// const auto5 = new Auto("Joy", "Chevrolet", 2021, 5000, "chevroletjoy.jpg", 005)
// const auto6 = new Auto("Mustang", "Ford", 2018, 6250, "fordmustang.jpg", 006)
// const auto7 = new Auto("Raptor", "Ford", 2020, 1200, "fordraptor.jpg", 007)
let arrayAutos = []

$.getJSON('js/stock.json', function (data){
    data.forEach(elemento => {
        arrayAutos.push(
            new Auto(
                elemento.modelo,
                elemento.marca,
                elemento.anio,
                elemento.precio,
                elemento.imagen,
                elemento.id
                )
        )
    });
    comenzar()
    recuperar()
})
