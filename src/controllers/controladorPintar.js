export function pintarProductos(productos){

    // 1. Crear una referencia en memoria que traiga el HTML sobre
    // el cual voy a pintar

    let fila=document.getElementById("fila")
    fila.innerHTML=""

    // 2. Recorrer el arreglo de datos

    productos.forEach(function(producto){
        // Creamos lo que necesitemos

        // 2.1 Creamos una columna

        let columna=document.createElement("div")
        columna.classList.add("col")

        // 2.2 Creamos la tarjeta

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","text-center")

        // 2.3 Creamos la foto 

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100","h-100")
        foto.src=producto.fotos[0]

        // 2.4 Creamos el nombre

        let nombre=document.createElement("h3")
        nombre.textContent=producto.nombre

        // 2.5 Creamos el precio

        let precio=document.createElement("h2")
        precio.classList.add("fw-bold")
        precio.textContent="$"+producto.precio+"€"

        // 2.6 Creamos la descripcion 

        let descripcion = document.createElement("p")
        descripcion.classList.add("d-none")
        descripcion.textContent = producto.descripcion

        // Deteccion de mouse

        columna.addEventListener("mouseover",function(evento){
            foto.src=producto.fotos[1]
        })

        columna.addEventListener("mouseleave",function(evento){
            foto.src=producto.fotos[0]
        })

        // Jerarquias (PADRE E HIJOS)

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)

        fila.appendChild(columna)
        
    })
}