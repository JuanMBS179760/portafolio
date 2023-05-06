function rfc(){
    var n= document.getElementById("nom").value;
    var app= document.getElementById("ap1").value;
    var apm= document.getElementById("ap2").value;
    var ano= document.getElementById("anio").value;
    var m= document.getElementById("mes").value;
    var dia= document.getElementById("dia").value;

    var cad1= n.charAt(0);
    var cad2= app.substr(0,2);
    var cad3= apm.charAt(0);
    var cad4= ano.substr(2,4);
    var cad5= m.substr(0,2);
    var cad6= dia.substr(0,2);
    var cadena;
    cadena = cad1 + cad2 + cad3 + cad4 + cad5 + cad6;

    
    
    document.getElementById("res").value = cadena.toUpperCase();

}