/*
const lista1 = [100, 200, 300, 500];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 += lista1[i];
}
const promedioLista1 = sumaLista1/lista1.length;


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}
//Mediana

const lista1 = [100, 200, 500, 400000000];
function ordenarLista(lista) {
    let listaOrden = lista;
    for (let i = 0; i < listaOrden.length-1; i++) {
        for (let j = i+1; j < listaOrden.length; j++) {
            if (listaOrden[j] > listaOrden[i]) {
                const aux = listaOrden[i];
                listaOrden[i] = listaOrden[j];
                listaOrden[j] = aux;
                console.log(listaOrden);
            }
        }
    }
    return listaOrden;
}
numbers.sort(function(a, b) {
    return a - b;
  });
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    //necesitamos dos elementos 
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    // el elemento promedio
    const promedioelemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    // mediana
    mediana = promedioelemento1y2;
}else{
    mediana = lista1[mitadLista1]
}
*/

//Moda
const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length-1]
    
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}
function calcularPromedio() {
    const lista = document.getElementById("InputLista");
    const listaValue = lista.value.split(",");
    for (let i = 0; i < listaValue.length; i++) {
        listaValue[i] = parseInt(listaValue[i])
        
    }
    const promedio = calcularMediaAritmetica(listaValue);
    const Result = document.getElementById("Respuesta");
    Result.innerText = "El promedio es: " + promedio;
}

function calcularModa() {
    const lista = document.getElementById("InputLista");
    const listaValue = lista.value.split(",");
    for (let i = 0; i < listaValue.length; i++) {
        listaValue[i] = parseInt(listaValue[i])
    }
    const lista1Count = {};

    listaValue.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    const moda = lista1Array[lista1Array.length-1]
    const Result = document.getElementById("Respuesta");
    Result.innerText = "La moda es: " + moda[0] + " se repite "+moda[1]+" veces.";
}

function calcularMediana() {
    const lista = document.getElementById("InputLista");
    const listaValue = lista.value.split(",");
    for (let i = 0; i < listaValue.length; i++) {
        listaValue[i] = parseInt(listaValue[i])
    }
    const mitadLista1 = parseInt(listaValue.length / 2);
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else{
            return false;
        }
    }
    
    let mediana;
    
    if (esPar(listaValue.length)) {
        //necesitamos dos elementos 
        const elemento1 = listaValue[mitadLista1 - 1];
        const elemento2 = listaValue[mitadLista1];
        // el elemento promedio
        const promedioelemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        // mediana
        mediana = promedioelemento1y2;
    }else{
        mediana = listaValue[mitadLista1]
    }
    const Result = document.getElementById("Respuesta");
    Result.innerText = "La mediana es: " + mediana;
}