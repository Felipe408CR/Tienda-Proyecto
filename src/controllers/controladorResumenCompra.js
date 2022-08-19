import {pintarResumenCompra} from './controladorPintarResumen.js'


// Accedemos a la variable local del carrito

let carrito=JSON.parse(localStorage.getItem('carrito'))



// Comparo o pregunto si el carrito esta vacio

if(carrito==null){
    console.log("hola")

    pintarResumenCompra('../../assets/img/carrito.jpg','Carrito Vacio',true,false,null,false,null)

}else{ // El carrito esta lleno

    // Recorro el carrito de compras 

    let total=0
    carrito.forEach(function(producto){

        let subtotal=Number(producto.precio.split("€")[0])*Number(producto.cantidad)
        
        total=total+subtotal
        
        

        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad)
    
   



    })
    let totaletiqueta=document.getElementById("total")
    totaletiqueta.textContent= 'El total de la compra: ' + total + '€'

    let cambioMoneda=document.getElementById("cambioMoneda")
    let interruptor=true 
        cambioMoneda.addEventListener('click',function(evento){
          if(interruptor==true){
            
            totaletiqueta.textContent='El total de la compra: '+Math.round((total*4418))+'COP'
            
                interruptor=false
            } else{
                totaletiqueta.textContent='El total de la compra: ' + total + '€'
                interruptor=true
            }


                 

        // cambio=document.getElementById("total")
        // cambio.textContent=Math.round((total/000023))
                
        })
     
}

// Rutina para limpiar el resumen de la compra 

let botonLimpiar=document.getElementById("botonLimpiar")
botonLimpiar.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")
    localStorage.removeItem("cantidad")
    console.log("oeeeeee")

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""

    pintarResumenCompra('../../assets/img/carrito.jpg','Carrito Vacio',true,false,null,false,null)
})

