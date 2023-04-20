function suma(){
    var n1=document.getElementById("num1").value; //guarda el valor en una variable
    var n2=document.getElementById("num2").value;
    var sum= parseInt(n1)+parseInt(n2);
    document.getElementById("res").innerHTML=sum; //muestra el valor de la variable con innerHTML
}
function resta(){
    var n1=document.getElementById("num1").value; //guarda el valor en una variable
    var n2=document.getElementById("num2").value;
    var restar= parseInt(n1)-parseInt(n2);
    document.getElementById("res").innerHTML=restar; //muestra el valor de la variable con innerHTML
}
function mult(){
    var n1=document.getElementById("num1").value; //guarda el valor en una variable
    var n2=document.getElementById("num2").value;
    var multi= parseInt(n1)*parseInt(n2);
    document.getElementById("res").innerHTML=multi; //muestra el valor de la variable con innerHTML
}
function div(){
    var n1=document.getElementById("num1").value; //guarda el valor en una variable
    var n2=document.getElementById("num2").value;
    var divi= parseInt(n1)/parseInt(n2);
    document.getElementById("res").innerHTML=divi; //muestra el valor de la variable con innerHTML
}