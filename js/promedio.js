// const lista1 = [
//   100,
//   200,
//   300,
//   500,];

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++) {
//   sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 /lista1.length;

let lista = [];

function datosUsuario() {
  let valorNumeroDatos = numeroDatos();

  //trae los datos a js y los agrega a la
  for (let i = 1; i < valorNumeroDatos + 1; i++) {
    let id = i;
    let dato = (inputDatoUsiario = document.getElementById(id));
    let valueDato = parseInt(dato.value);

    let aggElemento = lista.push(valueDato);
  }
}

function calcularMediaAritmetica() {
  // let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  //borrar datos del array
  lista = [];

  datosUsuario();

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  //recibe una funcion y lo que permite es sumar o cualquie operacion cada uno de los elementos del array

  const promedioLista = sumaLista / lista.length;
  const resultado = document.getElementById("resultado");
  resultado.innerText = "El promedio es: " + promedioLista;
}


function numeroDatos() {
  //saber cuantos input son
  const inputNumeroDatos = document.getElementById("datos");
  const value = parseInt(inputNumeroDatos.value);
  return value;
}

function aggInput() {
  //eliminar todos los elementos hijos del padre;
  var elemento = document.getElementById("aggInputs");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
  //quitar respuesta
  const resultado = document.getElementById("resultado");
  resultado.innerText = "";

  //colocar los input
  let valorNumeroDatos = numeroDatos();

  for (let i = 1; i < valorNumeroDatos + 1; i++) {
    var direccion =
      '<label for="' +
      i +
      '">dato: </label> <input id="' +
      i +
      '"type="number"></input>';
    let input1 = document.getElementById("aggInputs");
    input1.insertAdjacentHTML("beforeend", direccion);
  }
  let button = document.getElementById("aggInputs");
  button.insertAdjacentHTML(
    "beforeend",
    '<button type="button" onclick="calcularMediaAritmetica()">Calcular</button>'
  );
}
