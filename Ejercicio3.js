function generarNumeroAleatorio(){
    const Min = 0;
    const Max = 10;
    let num1 = 7;
    let num2 = 4;
    let resultado = "";
    let aleatorioDecima = Math.floor((Math.random() * Max - Min + 1)) + Min;
    if (aleatorioDecima < 5){
         resultado = "Operacion Resta entre el numero "+ num1+" y el numero "+num2+" igual a:"+ num1 - num2;
    }else if(aleatorioDecima >= 5){
        resultado = "Operacion Resta entre el numero "+ num1+" y el numero "+num2+" igual a:"+ num1 * num2;
    }
    console.log(resultado);
    document.getElementById("verSalida").innerHTML = resultado ;
}