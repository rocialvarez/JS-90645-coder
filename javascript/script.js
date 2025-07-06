//variables
const PRECIO_ALBUM_MUSICAL = 16000;
const PRECIO_PHOTOCARDS = 2100;
const PRECIO_ALBUM_FOTO = 10000;
const PRECIO_PELUCHES = 20000;

//arrays
const productos = ["DISCO", "PHOTOCARDS", "PHOTOALBUM", "PELUCHES"];
let compras = [];

function principal() {
  let seguirComprando = true;

  while (seguirComprando) {
    queQuiereYcuanto();
    seguirComprando = confirm("¿Continuar con tu compra?");
  }
}

function queQuiereYcuanto() {
  let que = prompt(`LISTA DE PRODUCTOS:

1 - ${productos[0]}
2 - ${productos[1]}
3 - ${productos[2]}
4 - ${productos[3]}

Ingresa el número del producto que querés:`);

  if (que !== "1" && que !== "2" && que !== "3" && que !== "4") {
    alert("No se encontró tu opción. ¿Querés volverlo a intentar?");
    return;
  }

  let cuanto = prompt("¿Cuántas unidades querés?");
  calcular(que, cuanto);
}

function calcular(que, cuanto) {
  switch (que) {
    case "1":
      total = PRECIO_ALBUM_MUSICAL * cantidad;
      productoNombre = productos[0];
      break;
    case "2":
      total = PRECIO_PHOTOCARDS * cantidad;
      productoNombre = productos[1];
      break;
    case "3":
      total = PRECIO_ALBUM_FOTO * cantidad;
      productoNombre = productos[2];
      break;
    case "4":
      total = PRECIO_PELUCHES * cantidad;
      productoNombre = productos[3];
      break;
    default:
      alert("Opción inválida");
      return;
  }

  alert(`${productoNombre}: $${total}`);
  console.log(`Compra: ${productoNombre} x${cantidad} = $${total}`);

  compras.push({ producto: productoNombre, cantidad: cantidad, total: total });
}

principal();
