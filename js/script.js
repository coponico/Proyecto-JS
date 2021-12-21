let iniciarSesion = document.getElementById('iniciarSesion')
iniciarSesion.addEventListener('click', (e) => {
    if (contraseña.length > 8) {
        
    }
})

class Auto {
    constructor(modelo, marca, año, precio, imagen) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.precio = precio;
        this.imagen = imagen;
    }
}
const auto1 = new Auto("Mobi", "Fiat", 2015, 3200, "fiatmobi.jpg")
const auto2 = new Auto("Uno", "Fiat", 2017, 999, "fiatuno.jpg")
const auto3 = new Auto("500", "Fiat", 2002, 2300, "fiat500.jpg")
const auto4 = new Auto("Argo", "Fiat", 2013, 1200, "fiatargo.jpg")


let arrayAutos = [auto1, auto2, auto3, auto4]

for (let autoEnArray of arrayAutos) {

    console.log(autoEnArray)
}

let button1 = document.getElementById("sort1")
let button2 = document.getElementById("sort2")
let button3 = document.getElementById("sort3")
let button4 = document.getElementById("sort4")

button4.addEventListener('click', () => {
    console.log("Solo precios", arrayAutos.map(arrayAutos => arrayAutos = arrayAutos.precio))
})


let productos = document.getElementById("Productos");

arrayAutos.forEach(autoEnArray => {
    Productos.innerHTML += `
    <div class="producto">
    <h4 class="productoNombre">${autoEnArray.marca} ${autoEnArray.modelo}</h4>
    <img src="img/${autoEnArray.imagen}" alt="">
    <p class="productoAño">Año: ${autoEnArray.año}</p>
    <p class="productoPrecio">Precio: ${autoEnArray.precio}</p>
    <button id="comprar">Comprar</button>
    <button id="carrito">Añadir al carrito</button>
    <label for="cuotas">Cuotas</label>
    <select id="cuotas" name="cuotas"
    <option value="0"></option>
    <option value="1">1 cuota</option>
    <option value="6">6 cuotas</option>
    <option value="12">12 cuotas</option>
    <input type="button" value="Elegir" />
    </select>
    </div>
    <div id="precioF"></div>`
})

button1.addEventListener("click", () => {
    let menorAMayor = arrayAutos.sort((autoA, autoB) => autoA.precio - autoB.precio)
    Productos.innerHTML = "";
    menorAMayor.forEach(autoEnArray => {
        Productos.innerHTML += `    
        <div class="producto">
        <h4 class="productoNombre">${autoEnArray.marca} ${autoEnArray.modelo}</h4>
        <img src="img/${autoEnArray.imagen}" alt="">
        <p class="productoAño">Año: ${autoEnArray.año}</p>
        <p class="productoPrecio">Precio: ${autoEnArray.precio}</p>
        <button id="comprar">Comprar</button>
        <button id="carrito">Añadir al carrito</button>
        <label for="cuotas">Cuotas</label>
        <select id="cuotas" name="cuotas"
        <option value="0"></option>
        <option value="1">1 cuota</option>
        <option value="6">6 cuotas</option>
        <option value="12">12 cuotas</option>
        <input type="button" value="Elegir" />
        </select>
    </div>
    <div id="precioF"></div>
    `
    })
})

button2.addEventListener('click', () => {
    let mayorA1000 = arrayAutos.filter(autoEnArray => autoEnArray.precio >= 1000)
    Productos.innerHTML = "";
    mayorA1000.forEach(autoEnArray => {
        Productos.innerHTML += `
        <div class="producto">
        <h4 class="productoNombre">${autoEnArray.marca} ${autoEnArray.modelo}</h4>
        <img src="img/${autoEnArray.imagen}" alt="">
        <p class="productoAño">Año: ${autoEnArray.año}</p>
        <p class="productoPrecio">Precio: ${autoEnArray.precio}</p>
        <button id="comprar">Comprar</button>
        <button id="carrito">Añadir al carrito</button>
        <label for="cuotas">Cuotas</label>
        <select id="cuotas" name="cuotas"
        <option value="0"></option>
        <option value="1">1 cuota</option>
        <option value="6">6 cuotas</option>
        <option value="12">12 cuotas</option>
        <input type="button" value="Elegir" />
        </select>
        <div id="precioF"></div>
    </div>
`
    })
})


class Cliente {
    constructor(nombre, apellido, dni, email, sueldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
    this.sueldo = sueldo;
}
incrementarSueldo(dineroAIncrementar) {
    this.sueldo += dineroAIncrementar;
}
decrementarSueldo(dineroAIncrementar) {
    this.sueldo -= dineroAIncrementar;
}
}

let clientes = []

if(localStorage.getItem('clientes')) {
    clientes = JSON.parse(localStorage.getItem('clientes'))
}

else {
    clientes = []
}

let formCliente = document.getElementById('formCliente')
let divClientes = document.getElementById('divClientes')
let parrafoError = document.getElementById('parrafoError')

formCliente.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let dniCliente = document.getElementById("DNI").value
    let emailCliente = document.getElementById("email").value
    let sueldoCliente = document.getElementById("sueldo").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, dniCliente, emailCliente, sueldoCliente)
    console.log(objetoCliente)

    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))

    formCliente.reset()
})

document.getElementById('botonClientes').addEventListener('click', () => {
    let ClientesStorage = JSON.parse(localStorage.getItem('clientes'))

    if(divClientes.children.length == 0) {
        clientes.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
            <div id="cliente${indice}">
            <p>Cliente: ${clienteArray.nombre} ${clienteArray.apellido}<p>
            <p>DNI: ${clienteArray.dni}</p>
            <p>E-Mail: ${clienteArray.email}</p>
            <p>Sueldo: ${clienteArray.sueldo}</p>
            <button id="boton${indice}" class="btn btn-dark">Eliminar</button>
            </div>
            
            `
        })  
        ClientesStorage.forEach((clienteArray, indice) => {
            document.getElementById(`boton${indice}`).addEventListener('click', () => {
                document.getElementById(`cliente${indice}`).remove()
                clientes.splice(indice, 1)
                localStorage.setItem('clientes', JSON.stringify(clientes))
                console.log(`el cliente ${clienteArray.nombre} ha sido eliminado`)
            })
        })
    }
    else {
        parrafoError.innerText = "Deja de cliquear chinchulin"
    }


})

