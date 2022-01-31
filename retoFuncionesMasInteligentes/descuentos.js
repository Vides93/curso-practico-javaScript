//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
const verificationCupon = function () {
  const cupons = [10, 25, 50];
  const cupon = parseInt(document.getElementById("cupons").value);
  if (cupon === cupons[0]) {
    return cupons[0];
  } else if (cupon === cupons[1]) {
    return cupons[1];
  } else if (cupon === cupons[2]) {
    return cupons[2];
  } else {
    return 0;
  }
};

function priceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const inputDiscount = document.getElementById("InputDiscount");

  const priceValue = parseInt(inputPrice.value);
  const discountValue = parseInt(inputDiscount.value);
  const verificationCupons = verificationCupon();
  const discountCupon = discountValue + verificationCupons;
  console.log(discountCupon);
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountCupon
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

/* console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
});
 */
