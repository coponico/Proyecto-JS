
const contenedorCarrito = document.getElementById('contenedorCarrito')
let carritoAuto = []
function carritoAgregar(id) {
    let productoAgregar = arrayAutos.find(item => item.id == id)
    carritoAuto.push(productoAgregar)
    
    let div = document.createElement('div')
    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="img/${productoAgregar.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${productoAgregar.modelo}</h5>
                        <p class="card-text">${productoAgregar.marca}</p>
                        <a id="eliminar${productoAgregar.id}" class="btn btn-danger">Eliminar</a>
                        </div>            <label for="cuotas">Cuotas</label>
                        <select id="cuotasCar${productoAgregar.id}" class="cuotas" name="cuotas">
                        <option value="0"></option>
                        <option value="3">3 cuotas</option>
                        <option value="6">6 cuotas</option>
                        <option value="12">12 cuotas</option>
                        </select>
                        
                        <button type="button" id="productoElegir${productoAgregar.id}" class="botonElegir">
                    Elegir
                    </button>
                    </div>
                    <div id="precioCar${productoAgregar.id}" class="precioCar"></div>
                    </div>
    `
    contenedorCarrito.appendChild(div)


    let btnElimnar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnElimnar.addEventListener('click', ()=>{
        btnElimnar.parentElement.parentElement.remove()
        carritoAuto = carritoAuto.filter(item=> item.id != productoAgregar.id)
        localStorage.setItem('carrito', JSON.stringify(carritoAuto))
    })
    localStorage.setItem('carrito', JSON.stringify(carritoAuto))
}
let btnElegir = document.getElementById(`productoAgregar${autoSeleccionado.id}`)
btnElegir.addEventListener('click', () => {
    elegir(productoAgregar.id)
})

let comprar = document.getElementById('comprarModal')
let interior = document.getElementsByClassName('modal-body')
comprar.addEventListener('click', () => {
    interior.innerHTML = `hola`
})

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))

    if(recuperarLS){
        recuperarLS.forEach(elemento => {
            carritoAgregar(elemento.id)
        });
    }
}


const elegir = (id) => {

let autoSeleccionado = arrayAutos.find(item => item.id == id)

let cuotasSeleccionadas = document.getElementById(`cuotasCar${id}`).value
if (cuotasSeleccionadas >= 1) {
let precioConCuotas = autoSeleccionado.precio / parseInt(cuotasSeleccionadas)
let precioCar = document.getElementById(`precioCar${id}`)
precioCar.innerHTML = `Precio final: $${parseInt(precioConCuotas)}`
} else {
let precioCar = document.getElementById(`precioCar${id}`)
precioCar.innerHTML = `Precio final: $${parseInt(autoSeleccionado.precio)}`
}

}