const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Tienda Daniel Quiroz</title>

<style>
body{
    margin:0;
    font-family: Arial, sans-serif;
    background:#f2f2f2;
}

header{
    background:#2f80ed;
    color:white;
    text-align:center;
    padding:25px;
}

.contenedor{
    width:70%;
    margin:30px auto;
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}

h2{
    margin-top:20px;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:15px;
}

th, td{
    border:1px solid #ddd;
    padding:10px;
    text-align:left;
}

th{
    background:#f5f5f5;
}

button{
    border:none;
    padding:8px 12px;
    border-radius:5px;
    color:white;
    cursor:pointer;
}

.azul{
    background:#2f80ed;
}

.rojo{
    background:#e74c3c;
}

input{
    padding:10px;
    margin:5px;
    width:22%;
}

.mensaje{
    color:green;
    margin-top:15px;
}
</style>
</head>

<body>

<header>
<h1>Tienda de Mascotas Daniel Quiroz 🐶</h1>
<p>Gestión CRUD de productos usando Docker + AWS + GitHub Actions</p>
</header>

<div class="contenedor">

<h2>Productos</h2>

<button class="azul">Cargar Productos</button>

<table>
<tr>
<th>ID</th>
<th>Nombre</th>
<th>Descripción</th>
<th>Precio</th>
<th>Stock</th>
<th>Acciones</th>
</tr>

<tr>
<td>1</td>
<td>Snack Premium Daniel</td>
<td>Premios sabor carne para perros pequeños</td>
<td>$24.990</td>
<td>15</td>
<td>
<button class="azul">Editar</button>
<button class="rojo">Eliminar</button>
</td>
</tr>

<tr>
<td>2</td>
<td>Alimento Adulto Light</td>
<td>Control de peso y nutrición balanceada</td>
<td>$17.990</td>
<td>8</td>
<td>
<button class="azul">Editar</button>
<button class="rojo">Eliminar</button>
</td>
</tr>

<tr>
<td>3</td>
<td>Snacks Dentales</td>
<td>Ayuda a limpiar dientes y encías</td>
<td>$5.990</td>
<td>10</td>
<td>
<button class="azul">Editar</button>
<button class="rojo">Eliminar</button>
</td>
</tr>

</table>

<h2>Nuevo Producto</h2>

<input type="text" placeholder="Nombre">
<input type="text" placeholder="Descripción">
<input type="number" placeholder="Precio">
<input type="number" placeholder="Stock">

<br><br>

<button class="azul">Guardar</button>
<button style="background:gray;">Cancelar</button>

<p class="mensaje">Producto creado correctamente.</p>

</div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(html);
});

server.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
