let botones = document.querySelectorAll("button");
let operador1 = null;
let operador2 = null;
let operacion = "";
let resultado = document.getElementById("resultado");

// Función para manejar los clics en los botones
botones.forEach((element) => {
  element.addEventListener("click", function () {
    manejarEntrada(this.value || this.innerText);
  });
});

// Función para manejar la entrada de teclas
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (
    "0123456789".includes(key) ||
    ["+", "-", "*", "/"].includes(key) ||
    key == "Enter" ||
    key == "Backspace" ||
    key =="Delete"
  ) {
    manejarEntrada(key);
  }
});

// Maneja la entrada de los botones y del teclado
function manejarEntrada(valor) {
  if ("0123456789".includes(valor)) {
    if (operacion === "") {
      resultado.textContent += valor;
    } else {
      resultado.textContent += valor;
    }
  } else if (valor === "C" || valor === "Delete") {
    operador1 = 0;
    operador2 = null;
    operacion = "";
    resultado.textContent = "";
  } else if (valor === "=" || valor === "Enter") {
    //coger operando2
    operador2=parseFloat(resultado.textContent);
    calcular();
  } else if (["+", "-", "*", "/"].includes(valor)) {
    //coger operando1
    operador1=parseFloat(resultado.textContent);
    operacion = valor;
    // Crear una ventana emergente que muestre el operador
    let popup = window.open("", "Operación", "width=200,height=100,top=50,left=50");
    popup.document.write(`<p style="font-size:20px;text-align:center;">Operación: ${valor}</p>`);
    
    // Cerrar la ventana y borrar el valor de la pantalla de la calculadora después de 1 segundo
    setTimeout(() => {
        popup.close();
        resultado.textContent = "";  // Limpiar la pantalla de la calculadora
    }, 1000);
    
    
  }
}
function calcular() {
  let res;
  switch (operacion) {
    case "+":
      res = operador1 + operador2;
      break;
    case "-":
      res = operador1 - operador2;
      break;
    case "*":
      res = operador1 * operador2;
      break;
    case "/":
      res = operador1 / operador2;
      break;
    default:
      break;
  }
  resultado.textContent = res;
  //operador1 = res;
  //operador2 = null;
}
