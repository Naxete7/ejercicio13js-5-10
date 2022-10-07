//Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.


// dos operandos
// signo aritmetico (string)
//cuadro de dialogo con resultado

let num1 = parseInt(prompt("Introduzca aqui un numero"));
let num2 = parseInt(prompt("Introduzca aqui otro numero"));

let resultado = prompt("Introduzca el signo de la operacion deseada");

switch (resultado) {
    case "+":
        console.log(num1 + num2)
        break;
    case "-":
        console.log(num1 - num2)
        break;
    case "*":
        console.log(num1 * num2)
        break;
    case "/":
        console.log(num1 / num2)
        break;
    case "^":
        console.log(num1 ** num2)
        break;
    case "%":
        console.log(num1 % num2 === 0)
        break;

}