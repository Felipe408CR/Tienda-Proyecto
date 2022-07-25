// Accedemos a la variable local del carrito

let carrito=JSON.parse(localStorage.getItem('carrito'))


// Crear una referencia para almacenar el contenedor

let contenedor=document.getElementById("contenedor")

// Limpiar el contenedor

contenedor.innerHTML=""

// Comparo o pregunto si el carrito esta vacio

if(carrito==null){

    let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6","align-self-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src="../../assets/img/carrito.jpg"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="Tu carrito está vacio"

    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50","d-block","mx-auto")
    boton.textContent="Ir a la Tienda"
    boton.setAttribute("href","../../nuestrosautos.html")

    // Padres e hijos

    columna1.appendChild(foto)
    columna2.appendChild(mensaje)
    columna2.appendChild(boton)

    fila.appendChild(columna1)
    fila.appendChild(columna2)

    contenedor.appendChild(fila)

}else{ // El carrito esta lleno

    // Recorro el carrito de compras 

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-4","border-end","my-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-6","align-self-center","mt-5")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h3")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h3")
        precio.classList.add("fw-bold")
        precio.textContent="Precio Und: " + producto.precio

        let cantidad=document.createElement("h3")
        cantidad.textContent= "Cantidad: " + producto.cantidad

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)

        fila.appendChild(columna1)
        fila.appendChild(columna2)
    
        contenedor.appendChild(fila)

    })

}