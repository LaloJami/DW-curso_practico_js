function presentacion(nombre, apellido, nickname) {
    var completeName = nombre + apellido;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

presentacion("Eduardo", "Jami", "Lalo")

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
let i = 0;
while(i < 5 ){
    console.log("El valor de i es: " + i);
    i++;
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let i = 10
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

let input = 0;
while (!(input === 4)) {
    input = prompt('¿Cual es el resultado de 2 + 2?');
    if (input === 4) {
        console.log("Correcto");
    } else{
        console.log("Incorrecto");
    }
}