function restarMultiplicar(){
   
   const n1 = 16;
   const n2 = 8;
   let resuldadoResta = "El resultado es:"+(n1 - n2);
   let resultadoMultiplicacion= " y el de la multiplicación es: "+(n1 * n2);
   let resultado = resuldadoResta+resultadoMultiplicacion;
   console.log(resultado);
   document.getElementById("verSalida").innerHTML = resultado ;
}