// JavaScript común para todas las páginas

document.addEventListener("DOMContentLoaded", function () {
    // Otro código de inicialización

    const registroForm = document.getElementById("registroForm");

    if (registroForm) {
        registroForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Obtener los valores de los campos
            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const contrasena = document.getElementById("contrasena").value;

            // Realizar acciones adicionales aquí (por ejemplo, validación y envío al servidor)

            // Limpiar los campos después de enviar el formulario
            registroForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cambiarColorButton = document.getElementById("cambiarColor");

    if (cambiarColorButton) {
        cambiarColorButton.addEventListener("click", function () {
            document.body.style.backgroundColor = getRandomColor();
        });
    }
});

// En tu archivo "script.js"
let carrito = [];
let total = 0;

function seleccionarProducto(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    total += precio;

    // Actualizar la lista de productos en el carrito
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);
    });

    totalCarrito.textContent = total.toFixed(2);
}




function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function () {
    const formularioPoema = document.getElementById("formulario-poema");
    const listaPoemas = document.getElementById("lista-poemas");

    formularioPoema.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener valores del formulario
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const contenido = document.getElementById("contenido").value;

        // Crear un nuevo elemento de lista para el poema
        const nuevoPoema = document.createElement("li");
        nuevoPoema.innerHTML = `<h3>${titulo}</h3><p>Autor: ${autor}</p><p>${contenido}</p>`;

        // Agregar el nuevo poema a la lista
        listaPoemas.appendChild(nuevoPoema);

        // Limpiar el formulario
        formularioPoema.reset();
    });
});


