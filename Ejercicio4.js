function mesAleatorio(){
    const Min = 0;
    const Max = 12;
    let num1 = 7;
    let num2 = 4;
    let resultado = "";
    let mesAnio = Math.floor((Math.random() * Max - Min + 1)) + Min;

    resultado = (mesAnio ==1 || mesAnio == 3 || mesAnio == 5 || mesAnio == 7 || mesAnio == 8 || mesAnio == 10 || mesAnio == 12) ?  "El mes tiene 31 días" : (mesAnio ==4 || mesAnio == 6 || mesAnio ==9 || mesAnio == 11) ? "El mes tiene 30 días" : "El mes tiene 29 días";
    console.log(resultado);
    document.getElementById("verSalida").innerHTML = resultado ;
}