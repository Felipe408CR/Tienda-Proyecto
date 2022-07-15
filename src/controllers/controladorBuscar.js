import {productosBD} from '../helpers/baseDatos.js'
import {pintarProductos} from './controladorPintar.js'
export function buscarProductos(){

    // Controlar el input donde escribe el usuario

    let buscador=document.getElementById("busqueda")

    // Detectamos que el usuario escribe y capturamos lo
    // que esta escribiendo

    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value
        
        // Se aplica el filtro

        let filtro=productosBD.filter(function(producto){
            return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())) 
        })

        console.log(filtro)
        pintarProductos(filtro)
    })
}