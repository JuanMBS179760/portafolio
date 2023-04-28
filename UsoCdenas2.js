function tamano(){
    var tex1 =  document.getElementById("t1").value;
    var tex2 = document.getElementById("t2").value;

    var num = tex1.length;
    document.getElementById("t5").value= num;
}

function conc(){
    var tex1 = document.getElementById("t1").value;
    var tex2 = document.getElementById("t2").value;

    var unir= tex2.concat(" ").concat(tex1) ; 
    document.getElementById("t5").value= unir;
}

function may(){
    var tex1 = document.getElementById("t1").value;
    var res = tex1.toUpperCase();

    document.getElementById("t6").value=res;
    
}

function min(){
    var tex1 = document.getElementById("t1").value;
    var res = tex1.toLowerCase();

    document.getElementById("t6").value = res;
    
}

function pos(){
    var tex1 = document.getElementById("t1").value;
    var ind = document.getElementById("t3").value;

    var res= tex1.substring(ind);

    document.getElementById("t6").value= res;
}

function separa(){
    var tex1 = document.getElementById("t1").value;

    var cadena= tex1.split("/");
    for(i in cadena){
        alert(cadena[i]);
        //document.getElementById("t6"). value= cadena[i];
    }
}

