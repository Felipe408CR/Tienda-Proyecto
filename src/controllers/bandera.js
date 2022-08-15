const altura=document.body.scrollHeight - window.innerHeight;
const fondo=document.getElementById('bandera');

window.onscroll = () => {
    const anchoFondo=(window.pageYOffset / altura) * 300;
    if(anchoFondo <= 100){
    fondo.style.width=anchoFondo + '%';
    }
}