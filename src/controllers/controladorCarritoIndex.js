let suma=0

if(localStorage.getItem("cantidad")!=null){
    suma=localStorage.getItem("cantidad")
    console.log("null")
}else{
    suma=0
}

let bolitaCantidad=document.getElementById("contadorCarrito")
bolitaCantidad.textContent=suma