function iniciar(){
    var boton=document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    }

    function nuevoitem(){
        var clave=document.getElementById('clave').value;
        var valor=document.getElementById('texto').value;
        localStorage.setItem(clave,valor);
        mostrar();
        document.getElementById('clave').value='';
        document.getElementById('texto').value='';
        document.getElementById("clave").innerHTML=mostrar();

    }

    function mostrar(){
        var cajadatos=document.getElementById('cajadatos');
        cajadatos.innerHTML='';
        for(var f=0;f<localStorage.length;f++){
        var clave=localStorage.key(f);
        var valor=localStorage.getItem(clave);
        cajadatos.innerHTML+="se han registrado tus datos "+clave;
        }
        }
    function sugerencia(){
        var sug=document.getElementById('sugerencias');
        document.getElementById('mensaje').innerHTML='se ha enviado con exito';
    }