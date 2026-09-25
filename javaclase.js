const nombreCliente = "Camila";
const ciudad = "Bogotá";
const esRappiPrime = true;

console.log(
    "Hola " + nombreCliente + ", tu pedido a domicilio en " + ciudad + "."
);

console.log("¿Es Rappi Prime?: " + esRappiPrime);


const productos = ["Hamburguesa", "Papas", "Gaseosa"];

console.log("Lista de productos:");
console.log(productos);

console.log("Primer producto:");
console.log(productos[0]);

productos.push("Postre");

console.log("Lista después de agregar el Postre:");
console.log(productos);

productos.pop();

console.log("Lista después de quitar el último producto:");
console.log(productos);

console.log(
    "El pedido tiene " + productos.length + " productos."
);

const pedido = {
    cliente: nombreCliente,
    ciudad: ciudad,
    productos: productos,
    estado: "En preparación"
};

console.log("Pedido completo:");
console.log(pedido);

console.log("Cliente:");
console.log(pedido.cliente);

pedido.estado = "En camino";

console.log("Pedido actualizado:");
console.log(pedido);

console.log("Primer producto del pedido:");
console.log(pedido.productos[0]);

let subtotal = 20000;
let domicilio = 3500;

const porcentajePropina = 0.10;

let total = subtotal + domicilio;

console.log("Subtotal: $" + subtotal);
console.log("Domicilio: $" + domicilio);
console.log("Total sin propina: $" + total);

let propinaSugerida = subtotal * porcentajePropina;

console.log("Propina sugerida: $" + propinaSugerida);

console.log(
    "Total a pagar por el pedido de " +
    nombreCliente +
    ": $" +
    total
);


let subtotalTexto = "20000";

let domicilioNumero = 3500;

let totalIncorrecto = subtotalTexto + domicilioNumero;

console.log("Resultado incorrecto:");
console.log(totalIncorrecto);

let subtotalConvertido = Number(subtotalTexto);

let totalCorrecto = subtotalConvertido + domicilioNumero;

console.log("Resultado correcto:");
console.log(totalCorrecto);



console.log("RESUMEN DEL PEDIDO");


console.log("Cliente: " + pedido.cliente);
console.log("Ciudad: " + pedido.ciudad);
console.log("Productos: " + pedido.productos);
console.log("Estado: " + pedido.estado);
console.log("Subtotal: $" + subtotalConvertido);
console.log("Domicilio: $" + domicilioNumero);
console.log("Total a pagar: $" + totalCorrecto);