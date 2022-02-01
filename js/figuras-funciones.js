//Codigo con variables fijas

// Codigo del cuadrado
console.group("Cuadrados");
/* console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado();
/* console.log("El perímetro del cuadrado es: " + perimetroCuadrado() + " cm"); */

function areaCuadrado(lado) {
  return lado * lado;
}
/* console.log("El area del cuadrado es: " + areaCuadrado + "cm^2"); */
// Codigo del cuadrado
console.groupEnd();

console.group("Triangulos");
//Codigo del triangulo
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
); */

function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}
/* console.log("El perímetro del triangulo es: " + perimetroTriangulo + " cm"); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm"); */
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
/* console.log("El area del cuadrado es: " + areaTriangulo + "cm^2");*/
console.groupEnd();

//Codigo Circulos
console.group("Circulos");
/* const radioCirculo = 4;*/

function diametroCirculo(radio) {
  return radio * 2;
}
const PI = Math.PI;

/* console.log("El radio del circulo es: " + radioCirculo + " cm");
console.log("El diametro del circulo es: " + diametroCirculo + " cm");*/
//console.log("El valor de PI es: " + PI);
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//Aqui interactuamos con el html

//Funciones para el cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("el area del cuadrado es: " + area);
}
//FIN funciones para el cuadrado

//Funciones para el triangulo
function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("lado1");
  const lado2 = document.getElementById("lado2");
  const base = document.getElementById("base");

  const valueLado1 = lado1.value;
  const valueLado2 = lado2.value;
  const valueBase = base.value;

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularTrianguloArea() {
  const base = document.getElementById("base");
  const altura = document.getElementById("altura");

  const valueBase = base.value;
  const valueAltura = altura.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

function calcularAlturaTrianguloIsoceles() {
  const lado1 = document.getElementById("lado1");
  const lado2 = document.getElementById("lado2");
  const base = document.getElementById("base");

  const valueLado1 = lado1.value;
  const valueLado2 = lado2.value;
  const valueBase = base.value;

  if (valueLado1 === valueLado2 && valueLado1 != valueBase) {
    const altura = Math.sqrt(valueLado1 ** 2 - (valueBase / 2) ** 2);
    alert("La altura del triangulo es:" + altura);
  } else {
    alert("No es un triangulo isoceles");
  }
}

//FIN funciones para el triangulo

//funciones para el circulo
function calcularPerimetroCirculo() {
  const radio = document.getElementById("InputCirculo");
  const valueRadio = radio.value;

  const perimetro = perimetroCirculo(valueRadio);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const radio = document.getElementById("InputCirculo");
  const valueRadio = radio.value;

  const area = areaCirculo(valueRadio);
  alert(area);
}

//FIN funciones para el circulo
