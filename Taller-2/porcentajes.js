const precioOriginal = 120;
const descuento = 18;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

//funciones
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function computePriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    const priceValue = inputPrice.value; 
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "El precio con descuento es: $ " + precioConDescuento;
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });