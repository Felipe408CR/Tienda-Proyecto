// Se traen los datos de los productos (consultar la bd)
import {productosBD} from '../helpers/baseDatos.js'; 
console.log(productosBD)

// Llamamos al metodo encargado de aplicar traversing y pintar la tienda

import {pintarProductos} from './controladorPintar.js'
pintarProductos(productosBD)

// Llamamos al metodo encargado de buscar productos por texto coincidente

import {buscarProductos} from './controladorBuscar.js';

buscarProductos()

// Escuchamos clic en el contenedor padre de la tienda

import {ampliarInfoProducto} from './controladorAmpliarinfo.js'

let contenedor = document.getElementById("fila")

contenedor.addEventListener('click',function(evento){

    let producto = ampliarInfoProducto(evento)
    console.log(producto)

   

    // Almacenar en el local storage la informacion del producto seleccionado 

    localStorage.setItem('infoProducto',JSON.stringify(producto))

    console.log(localStorage.getItem('infoProducto'))

    // Abro nueva ventana

    window.location.href="/src/views/ampliarInfo.html"
})