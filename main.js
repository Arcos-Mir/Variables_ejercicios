
/* Ejercicio 1 has hecho y sabes le precio del producto y su iva. hacer un programa para calcular el precio total que pagara el usuario por su compra */

let cost = prompt("Ingresa el costo de tu compra");
let iva = 0.21;
let total = 0;
let payTotal = 0;

total = parseFloat(cost) * iva;
payTotal = parseFloat(total) + parseFloat(cost);

console.log("El total a pagar es: ", payTotal);

/* Ejercicio 2 en una variable tienes el lado de un cuadrado debes escribir un programa que te calcule el área y el perímetro del cuadrado */

let area = 0;
let perim = 0;
let lado = prompt("Ingrese la longitud del lado de un cuadrado");


area = parseInt(lado) * parseInt(lado);

console.log("El área del cuadrado es: ", area);

perim = parseInt(lado) * 4 ;

console.log("El perímetro del cuadrado es: ", perim);


/* Ejercicio 3 en este ejercicio debes escribir un programa que lea el nombre del ususario y salude con un 'Hola' seguido del nombre del usuario */

let nombre = prompt("Por favor ingresa tu nombre");

console.log("Hola!!!...", nombre);



/* Ejercicio 4 en este ejercicio se pedirá al usuario que teclee 3 números enteros y el script mostrará como resultado el valor medio de los 3 */

let num1 = prompt("Por favor ingresa un número entero");
let num2 = prompt("Por favor ingresa otro número entero");
let num3 = prompt("Por favor ingresa otro número entero");
let media = 0;
let suma = 0;

suma = parseInt(num1) + parseInt(num2) + parseInt(num3);
media = parseInt(suma) / 3;

console.log("La media de los 3 números es: ", media);

/* Ejercicio 5 escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos, el script debe mostrar el consumo de combustible por kilómetro */

let km = prompt("Ingresa el número de kilómetros recorridos por tu coche");
let litros = prompt("Ingresa el número de litros consumidos");
let res = 0;

res = parseFloat(litros) / parseFloat(km);

console.log("Has consumido: ", res + " l/km");

/* Ejercicio 6 cambio de unidades , en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos */

let hr = 2;
let min = 30;
let seg = 0;

seg = 2 * 60 * 60 + 30 * 60;
console.log("Los segundos son: ", seg + " " + "segundos");

/* Ejercicio 7 pedir al usuario un número de 2 digitos y debes devolver el número de unidades y de decenas. usa solo operaciones aritméticas */

let number = prompt("Por favor ingresa un número de 2 dígitos");
let unidades = 0;
let decenas = 0;

decenas = parseInt(number) / 10;
console.log("Decenas: ", Math.trunc(decenas));

unidades = parseInt(number) % 10;
console.log("Unidades: ", unidades);

/* Ejercicio 8 una tortilla de patatas lleva 200 gr de patatas por persona, por cada kilo de patatas se necesitas 5 huevos y 300gr de cebolla. escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

let comsensal = prompt("Ingresa el número de comensales");
let patatas = 200;
let huevo = 1;
let cebolla = 60;
let potato = 0;
let egg = 0;
let onion = 0;

console.log(comsensal, "comensales");

potato = patatas * parseInt(comsensal);
console.log(potato + "gr de papas");

egg = huevo * parseInt(comsensal);
console.log(egg + " " + "huevos");

onion = cebolla * parseInt(comsensal);
console.log(onion + "gr de cebolla");

/* Ejercicio 9 escribir un programa que intercambie el valor de 2 variables, al final la primera variable debe tener el valor de la segunda y ñla segunda el valor de la primera */

let number1 = prompt("Ingresa un número");
let number2 = prompt("Ingresa otro número");
let n1 = 0;

console.log(" Antes: ");
console.log("Número 1 vale: ", number1 + " , " + "Número 2 vale: ", number2);

n1 = number1;
number1 = number2;

console.log(" Al final: ");
console.log("Número 1 vale: ", number1 + " , " + "Número 2 vale: ", n1);
















