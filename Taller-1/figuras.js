//Cuadrado
console.group("Cuadrado")
const lado_cuadrado = 5;
console.log("Los lados del cuadrado miden: " + lado_cuadrado + " cm");

//Perímetro del cuadrado
//const perimetroCuadrado = lado_cuadrado * 4;
function perimetroCuadrado(lado_cuadrado) {
    return lado_cuadrado * 4; 
}
console.log("el perímetro del cuadrado es: " + perimetroCuadrado(lado_cuadrado) + " cm");

//Área del cuadrado
//const areaCuadrado = lado_cuadrado * lado_cuadrado;
function areaCuadrado(lado_cuadrado) {
    return lado_cuadrado * lado_cuadrado;
}
console.log("el área del cuadrado es: " + areaCuadrado(lado_cuadrado) + " cm^2");
console.groupEnd();
console.group("Triángulo")
//Triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo son: "
    + ladoTriangulo1+" cm, "
    + ladoTriangulo2+" cm, "
    + baseTriangulo+" cm."
);
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: "+ alturaTriangulo+ " cm");
// Perímetro del triángulo
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
console.log("El perímetro del triángulo es: "+ perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)+ " cm");
// Área del triángulo
//const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
function areaTriangulo(base, altura) {
    return (base * altura)/2;
}
console.log("El área del triángulo es: "+ areaTriangulo(baseTriangulo,alturaTriangulo)+ " cm^2");
console.groupEnd()
//Circulo
console.group("Circulo")
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo+ " cm");
//Diámetro
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
    return radio * 2;
}
console.log("El diametro del circulo es: "+ diametroCirculo(radioCirculo)+ " cm");
//PI
const PI = Math.PI
console.log("Pi es: "+ PI+ " cm");
//circunferencia
//const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI
}
console.log("El peímetro del circulo es: "+ perimetroCirculo(radioCirculo)+ " cm");
//Área del circulo
//const areaCirculo = (radioCirculo*radioCirculo)*PI;
function areaCirculo(radio) {
    return (radio*radio)*PI
}
console.log("El área del circulo es: "+ areaCirculo(radioCirculo)+ " cm^2");
console.groupEnd()
