function valida(){
    let dato_fecha= document.getElementById('cum').value;
    let imagen= document.getElementById('imagen');
    if(validaFecha(dato_fecha)==true){
        document.getElementById('res').innerHTML= "Felicidades, eres candidato para el descuento\n";
            let img =document.getElementById("imagen");
            img.setAttribute("scr"); 
    } else{
        document.getElementById('res').innerHTML="Lo siento, la fecha: "+dato_fecha+" no es valida para el descuento, sigue participando"
    }

}

function validaFecha(dato_fecha){
    let mes= 5;
    var i;
    let validaMes= document.getElementById('cum').value;
    let val =validaMes.substring(2,5);
    validaMes.
    for(i=1, i<=12, i++) {
        if(val==mes){
            return true;
        } else{
            return false;
        }
    }
}