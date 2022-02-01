//Codigo con variables fijas

// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// Codigo del cuadrado

console.group("Triangulos");
//Codigo del triangulo
const ladoTriangulo1 = 6;
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
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + " cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del cuadrado es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo Circulos
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

console.log("El radio del circulo es: " + radioCirculo + " cm");
console.log("El diametro del circulo es: " + diametroCirculo + " cm");
console.log("El valor de PI es: " + PI);
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es:" + perimetroCirculo + " cm");

const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("el area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();
