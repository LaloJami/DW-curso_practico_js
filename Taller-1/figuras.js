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
//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("Input-Cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resp = "El perímetro del cuadrado es: " + perimetro + " cm.";
    document.getElementById("Respuesta-cuadrado").value = resp;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("Input-Cuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const resp = "El área del cuadrado es: " + area + " cm^2.";
    document.getElementById("Respuesta-cuadrado").value = resp;
}
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("Input-Triangulo-lado1");
    const lado2 = document.getElementById("Input-Triangulo-lado2");
    const base = document.getElementById("Input-Triangulo-base");
    const value_lado1 = lado1.value;
    const value_lado2 = lado2.value;
    const value_base = base.value;
    const perimetro = perimetroTriangulo(Number(value_lado1),Number(value_lado2),Number(value_base));
    const resp = "El perímetro del Triangulo es: " + perimetro + " cm.";
    document.getElementById("Respuesta-triangulo").value = resp;
}
const calculAltura = function (a, b, c) {
    let A;
    if(a > b && b === c && a >= 2*b || b > a && a === c && b >= 2*a || c > a && a === b && c >= 2*a) {
        alert('Valores fuera de lo real');
    } else if(a > b && a === c || a < b && a === c) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(b/2, 2));
        return A;
    } else if(a > c && a === b || a < c && a === b) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(c/2, 2));
        return A;
    } else if(b > a && b === c || b < a && b === c) {
        A = Math.sqrt(Math.pow(b,2) - Math.pow(a/2, 2));
        return A;
    } else {
        alert('El triangulo no es Isósceles');
    }
}   

function calcularAreaTriangulo() {
    const lado1 = document.getElementById("Input-Triangulo-lado1");
    const lado2 = document.getElementById("Input-Triangulo-lado2");
    const base = document.getElementById("Input-Triangulo-base");
    const value_lado1 = Number(lado1.value);
    const value_lado2 = Number(lado2.value);
    const value_base = Number(base.value);
    const alturaTriangulo = calculAltura(value_lado1, value_lado2, value_base);
    const area = areaTriangulo(alturaTriangulo, value_base);
    const resp = "El área del Triangulo es: " + area + " cm^2.";
    document.getElementById("Respuesta-triangulo").value = resp;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("Input-radio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    const resp = "El perímetro del circulo es: " + perimetro + " cm.";
    document.getElementById("Respuesta-circulo").value = resp;
}
function calcularAreaCirculo() {
    const input = document.getElementById("Input-radio");
    const value = input.value;
    const area = areaCirculo(value);
    const resp = "El área del circulo es: " + area + " cm^2.";
    document.getElementById("Respuesta-circulo").value = resp;
}