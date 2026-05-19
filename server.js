const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Tienda Daniel Quiroz</title>
<style>
body{margin:0;font-family:Arial,sans-serif;background:#f2f2f2;}
header{background:#2f80ed;color:white;text-align:center;padding:25px;}
.contenedor{width:75%;margin:30px auto;background:white;padding:25px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.2);}
table{width:100%;border-collapse:collapse;margin-top:15px;}
th,td{border:1px solid #ddd;padding:10px;text-align:left;}
th{background:#f5f5f5;}
button{border:none;padding:8px 12px;border-radius:5px;color:white;cursor:pointer;margin:2px;}
.azul{background:#2f80ed;}
.rojo{background:#e74c3c;}
.gris{background:gray;}
input{padding:10px;margin:5px;width:22%;}
.mensaje{color:green;margin-top:15px;}
</style>
</head>
<body>

<header>
<h1>Tienda de Mascotas Daniel Quiroz 🐶</h1>
<p>CRUD interactivo de productos usando Node.js</p>
</header>

<div class="contenedor">
<h2>Productos</h2>

<table>
<thead>
<tr>
<th>ID</th>
<th>Nombre</th>
<th>Descripción</th>
<th>Precio</th>
<th>Stock</th>
<th>Acciones</th>
</tr>
</thead>
<tbody id="tablaProductos"></tbody>
</table>

<h2 id="tituloFormulario">Nuevo Producto</h2>

<input id="nombre" type="text" placeholder="Nombre">
<input id="descripcion" type="text" placeholder="Descripción">
<input id="precio" type="number" placeholder="Precio">
<input id="stock" type="number" placeholder="Stock">

<br><br>

<button class="azul" onclick="guardarProducto()">Guardar</button>
<button class="gris" onclick="limpiarFormulario()">Cancelar</button>

<p id="mensaje" class="mensaje"></p>
</div>

<script>
let productos = [
{id:1, nombre:"Snack Premium Daniel", descripcion:"Premios sabor carne para perros pequeños", precio:24990, stock:15},
{id:2, nombre:"Alimento Adulto Light", descripcion:"Control de peso y nutrición balanceada", precio:17990, stock:8},
{id:3, nombre:"Snacks Dentales", descripcion:"Ayuda a limpiar dientes y encías", precio:5990, stock:10}
];

let editandoId = null;

function cargarProductos(){
const tabla = document.getElementById("tablaProductos");
tabla.innerHTML = "";

productos.forEach(producto => {
tabla.innerHTML += \`
<tr>
<td>\${producto.id}</td>
<td>\${producto.nombre}</td>
<td>\${producto.descripcion}</td>
<td>$\${producto.precio}</td>
<td>\${producto.stock}</td>
<td>
<button class="azul" onclick="editarProducto(\${producto.id})">Editar</button>
<button class="rojo" onclick="eliminarProducto(\${producto.id})">Eliminar</button>
</td>
</tr>
\`;
});
}

function guardarProducto(){
const nombre = document.getElementById("nombre").value;
const descripcion = document.getElementById("descripcion").value;
const precio = document.getElementById("precio").value;
const stock = document.getElementById("stock").value;

if(nombre === "" || descripcion === "" || precio === "" || stock === ""){
document.getElementById("mensaje").innerText = "Completa todos los campos.";
return;
}

if(editandoId === null){
const nuevoProducto = {
id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
nombre,
descripcion,
precio,
stock
};

productos.push(nuevoProducto);
document.getElementById("mensaje").innerText = "Producto creado correctamente.";
} else {
const producto = productos.find(p => p.id === editandoId);
producto.nombre = nombre;
producto.descripcion = descripcion;
producto.precio = precio;
producto.stock = stock;

document.getElementById("mensaje").innerText = "Producto actualizado correctamente.";
editandoId = null;
document.getElementById("tituloFormulario").innerText = "Nuevo Producto";
}

limpiarFormulario();
cargarProductos();
}

function editarProducto(id){
const producto = productos.find(p => p.id === id);

document.getElementById("nombre").value = producto.nombre;
document.getElementById("descripcion").value = producto.descripcion;
document.getElementById("precio").value = producto.precio;
document.getElementById("stock").value = producto.stock;

editandoId = id;
document.getElementById("tituloFormulario").innerText = "Editando Producto";
}

function eliminarProducto(id){
productos = productos.filter(p => p.id !== id);
document.getElementById("mensaje").innerText = "Producto eliminado correctamente.";
cargarProductos();
}

function limpiarFormulario(){
document.getElementById("nombre").value = "";
document.getElementById("descripcion").value = "";
document.getElementById("precio").value = "";
document.getElementById("stock").value = "";
}

cargarProductos();
</script>

</body>
</html>
`;

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
res.end(html);
});

server.listen(3000, () => {
console.log('Servidor corriendo en puerto 3000');
});
