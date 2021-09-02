const prestamoBanco = 5000;
const interesAnual = 4;
const pagoMensual = 12;

//Pasar a interés mensual
function interesAnualFijo(interesAnual) {
    const tasa = ((1+(interesAnual/100))**(1/12))-1;
    return tasa
}
//Pasar de años a meses
function years2months(years) {
    return years * 12;
}
//Calcular la razon
function razon(interesMensual) {
    return 1 + interesMensual;
}
//Calcula la cuota
function cuotaMensualFija(prestamo, razon, meses) {
    const cuota = prestamo*(((razon**meses)*(razon-1))/((razon**meses)-1))
    return cuota
}

//const ejemplo = cuotaMensualFija(150000,razon(interesAnualFijo(4)),years2months(30)).toFixed(2);

function calculaPagoMensual() {
    const prestamo = document.getElementById("InputPrestamo");
    const plazo = document.getElementById("InputPlazo");
    const interes = document.getElementById("InputInteres");

    const prestamoValor = prestamo.value;
    const plazoValor = plazo.value;
    const interesValor = interes.value;

    const result = cuotaMensualFija(
        prestamoValor, 
        razon(interesAnualFijo(interesValor)), 
        years2months(plazoValor)
    ).toFixed(2);
    
    const respuesta = document.getElementById("AnswerH");
    respuesta.innerText = "La cuota hipotecaria a plazo fijo es: $ "+result;
}