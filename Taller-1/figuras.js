//Cuadrado
console.group("Cuadrado")
const lado_cuadrado = 5;
console.log("Los lados del cuadrado miden: " + lado_cuadrado + " cm");

//Perímetro del cuadrado
const perimetroCuadrado = lado_cuadrado * 4;
console.log("el perímetro del cuadrado es: " + perimetroCuadrado + " cm");

//Área del cuadrado
const areaCuadrado = lado_cuadrado * lado_cuadrado;
console.log("el área del cuadrado es: " + areaCuadrado + " cm^2");
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
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: "+ perimetroTriangulo+ " cm");
// Área del triángulo
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: "+ areaTriangulo+ " cm");
console.groupEnd()
//Circulo
console.group("Circulo")
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo+ " cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: "+ diametroCirculo+ " cm");
//PI
const PI = Math.PI
console.log("Pi es: "+ PI+ " cm");
//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El peímetro del circulo es: "+ perimetroCirculo+ " cm");
//Área del circulo
const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("El área del circulo es: "+ areaCirculo+ " cm^2");
console.groupEnd()
