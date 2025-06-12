let colores = ["rojo", "azul", "verde", "amarillo", "morado"];
console.log("Colores iniciales:", colores);


console.log("Primer color:", colores[0]);
console.log("Último color:", colores[colores.length - 1]);


console.log("Cantidad de colores:", colores.length);


colores.push("naranja");
console.log("Después de agregar al final:", colores);


colores.unshift("rosado");
console.log("Después de agregar al inicio:", colores);


colores.pop();
console.log("Después de eliminar del final:", colores);


colores.shift();
console.log("Después de eliminar del principio:", colores);


colores[1] = "celeste";
console.log("Después de reemplazar el segundo color:", colores);


console.log("Recorriendo el arreglo:");
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}


let nuevosColores = [];
for (let i = 0; i < 3; i++) {
  let color = prompt("Ingresá un color:");
  nuevosColores.push(color);
}
console.log("Nuevos colores ingresados:", nuevosColores);