let iniciarSesion = document.getElementById('iniciarSesion')
iniciarSesion.addEventListener('click', (e) => {
    if (contraseña.length > 8) {

    }
})

function comenzar() {
        
        
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
            let div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML += `
            
            <h4 class="productoNombre">${autoEnArray.marca} ${autoEnArray.modelo}</h4>
            <img src="img/${autoEnArray.imagen}" alt="">
            <p class="productoAño">Año: ${autoEnArray.anio}</p>
            <p class="productoPrecio">Precio: ${autoEnArray.precio}</p>
            <div class="justifyProductos">
            <button id="comprar">Comprar</button>
            <button id="carrito${autoEnArray.id}" class="btn-carrito">Añadir al carrito</button>
            <label for="cuotas">Cuotas</label>
            <select id="cuotas${autoEnArray.id}" class="cuotas" name="cuotas">
            <option value="0"></option>
            <option value="3">3 cuotas</option>
            <option value="6">6 cuotas</option>
            <option value="12">12 cuotas</option>
            </select>
            
            <button type="button" id="producto${autoEnArray.id}" class="botonElegir">
        Elegir
        </button>
        </div>
        <div id="precioF${autoEnArray.id}" class="precioF"></div>
        `
        productos.appendChild(div)
        
        let btnElegir = document.getElementById(`producto${autoEnArray.id}`)
        btnElegir.addEventListener('click', () => {
            elegir(autoEnArray.id)
        })
    })

    button1.addEventListener("click", () => {
        let menorAMayor = arrayAutos.sort((autoA, autoB) => autoA.precio - autoB.precio)
        productos.innerHTML = "";
        menorAMayor.forEach(autoEnArray => {
            let div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML += `
            
            <h4 class="productoNombre">${autoEnArray.marca} ${autoEnArray.modelo}</h4>
            <img src="img/${autoEnArray.imagen}" alt="">
            <p class="productoAño">Año: ${autoEnArray.anio}</p>
            <p class="productoPrecio">Precio: ${autoEnArray.precio}</p>
            <div class="justifyProductos">
            <button id="comprar">Comprar</button>
            <button id="carrito${autoEnArray.id}" class="btn-carrito">Añadir al carrito</button>
            <label for="cuotas">Cuotas</label>
            <select id="cuotas${autoEnArray.id}" class="cuotas" name="cuotas">
            <option value="0"></option>
                <option value="3">3 cuotas</option>
                <option value="6">6 cuotas</option>
                <option value="12">12 cuotas</option>
                </select>
                
                <button type="button" id="producto${autoEnArray.id}" class="botonElegir">
                Elegir
                </button>
                </div>
                <div id="precioF${autoEnArray.id}" class="precioF"></div>
                `
                productos.appendChild(div)
                
                let btnElegir = document.getElementById(`producto${autoEnArray.id}`)
                btnElegir.addEventListener('click', () => {
                    elegir(autoEnArray.id)
                })
            })
        })
        
        button2.addEventListener('click', () => {
            let mayorA1000 = arrayAutos.filter(autoEnArray => autoEnArray.precio >= 1000)
            productos.innerHTML = "";
            mayorA1000.forEach(autoEnArray => {
                
                let div = document.createElement('div')
                div.classList.add('producto')
                div.innerHTML += `
                <h4 class="productoNombre">${autoEnArray.marca} ${autoEnArray.modelo}</h4>
                <img src="img/${autoEnArray.imagen}" alt="">
                <p class="productoAño">Año: ${autoEnArray.año}</p>
                <p class="productoPrecio">Precio: ${autoEnArray.precio}</p>
                <div class="justifyProductos">
                <button id="comprar">Comprar</button>
                <button id="carrito${autoEnArray.id}" class="btn-carrito">Añadir al carrito</button>
                <label for="cuotas">Cuotas</label>
                <select id="cuotas${autoEnArray.id}" class="cuotas" name="cuotas">
                <option value="0"></option>
                <option value="3">3 cuotas</option>
                <option value="6">6 cuotas</option>
                <option value="12">12 cuotas</option>
                </select>
                
                <button type="button" id="producto${autoEnArray.id}" class="botonElegir">
                Elegir
                </button>
                </div>
                <div id="precioF${autoEnArray.id}" class="precioF"></div>
                `
                productos.appendChild(div)
                
                let btnElegir = document.getElementById(`producto${autoEnArray.id}`)
                btnElegir.addEventListener('click', () => {
                    elegir(autoEnArray.id)
                })
            })
        })
        
        const elegir = (id) => {
            
            console.log(id)
            
            let autoSeleccionado = arrayAutos.find(item => item.id == id)
            
            let cuotasSeleccionadas = document.getElementById(`cuotas${id}`).value
            if (cuotasSeleccionadas >= 1) {
                let precioConCuotas = autoSeleccionado.precio / parseInt(cuotasSeleccionadas)
                console.log(precioConCuotas);
            let precioF = document.getElementById(`precioF${id}`)
            precioF.innerHTML = `Precio final: $${parseInt(precioConCuotas)}`
        } else {
            let precioF = document.getElementById(`precioF${id}`)
            precioF.innerHTML = `Precio final: $${parseInt(autoSeleccionado.precio)}`
        }
        
    }
}

