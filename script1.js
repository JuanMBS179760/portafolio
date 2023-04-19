function saludo(){
    var nom;
    nom= prompt("Escribe tu nombre: ", "");
    alert("Hola " + nom);
}

function suma(){
    var n1, n2, res;
    n1=prompt("Escribe un numero: ", "");
    n2=prompt("Escribe un segundo numero: ", "");
    res=parseInt(n1)+parseInt(n2);
    alert("La suma es: " +res);
}

function resta(){
    var n1, n2, res;
    n1=prompt("Escribe un numero: ", "");
    n2=prompt("Escribe un segundo numero: ", "");
    res=parseInt(n1)-parseInt(n2);
    alert("La resta es: " +res);
}

function mult(){
    var n1, n2, res;
    n1=prompt("Escribe un numero: ", "");
    n2=prompt("Escribe un segundo numero: ", "");
    res=parseInt(n1)*parseInt(n2);
    alert("La multiplicacion es: " +res);
}

function div(){
    var n1, n2, res;
    n1=prompt("Escribe un numero: ", "");
    n2=prompt("Escribe un segundo numero: ", "");
    res=parseInt(n1)/parseInt(n2);
    alert("La division es: " +res);
}

function posneg(){
    var n;
    n=prompt("Digita un numero: ", "")
    if(parseInt(n)>0){
      alert("Positivo");
    } else{
      alert("Negativo");
    }
   
}