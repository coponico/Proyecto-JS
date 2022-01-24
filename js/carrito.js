const contenedorCarrito = document.getElementById('contenedorCarrito')
let carritoAuto = []
function carritoAgregar(id) {
    let productoAgregar = arrayAutos.find(item => item.id == id)
    
    carritoAuto.push(productoAgregar)
    let div = document.createElement('div')
    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="../img/${productoAgregar.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${productoAgregar.modelo}</h5>
                        <p class="card-text">${productoAgregar.marca}</p>
                        <a id="eliminar${productoAgregar.id}" class="btn btn-danger">Eliminar</a>
                        </div>
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

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))

    if(recuperarLS){
        recuperarLS.forEach(elemento => {
            carritoAgregar(elemento.id)
        });
    }
}