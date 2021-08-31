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

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];
const combobox = document.getElementById("IDcoupons");
let text = ``;
for (let i = 0; i < coupons.length; i++) {
    text += `<option value="`+coupons[i].discount+`">`+coupons[i].name+`</option>`;
    combobox.innerHTML = text;
}

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}
if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultPrice");
    ResultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const couponValue = combobox.value;

function validCouponFunction() {
    const userCoupon = coupons.find(isCouponValueValid);
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });