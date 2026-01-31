// Variables globales
let productoSeleccionado = null;
const modal = document.getElementById('modal');
const notificacion = document.getElementById('notificacion');
const cerrar = document.querySelector('.cerrar');
const btnConfirmar = document.getElementById('btn-confirmar');
const btnCancelar = document.getElementById('btn-cancelar');
const botonesComprar = document.querySelectorAll('.btn-comprar');

// Datos de productos
const productos = {
    1: {
        nombre: 'Sylvanian 1',
        precio: '$19.99'
    },
    2: {
        nombre: 'Sylvanian 2',
        precio: '$19.99'
    },
    3: {
        nombre: 'Sylvanian 3',
        precio: '$19.99'
    }
};

// Carrito de compras (simulado)
let carrito = [];

// Event listeners para botones de compra
botonesComprar.forEach(boton => {
    boton.addEventListener('click', function() {
        productoSeleccionado = this.getAttribute('data-producto');
        abrirModal(productoSeleccionado);
    });
});

// Event listener para cerrar modal
cerrar.addEventListener('click', cerrarModal);
btnCancelar.addEventListener('click', cerrarModal);

// Event listener para confirmar compra
btnConfirmar.addEventListener('click', confirmarCompra);

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        cerrarModal();
    }
});

/**
 * Abre el modal con la información del producto
 * @param {string} numeroProducto - Número del producto seleccionado
 */
function abrirModal(numeroProducto) {
    const producto = productos[numeroProducto];
    const mensajeModal = document.getElementById('mensaje-modal');
    mensajeModal.textContent = `¿Deseas comprar ${producto.nombre} por ${producto.precio}?`;
    modal.classList.add('mostrar');
}

/**
 * Cierra el modal
 */
function cerrarModal() {
    modal.classList.remove('mostrar');
    productoSeleccionado = null;
}

/**
 * Confirma la compra y agrega el producto al carrito
 */
function confirmarCompra() {
    if (productoSeleccionado) {
        const producto = productos[productoSeleccionado];
        
        // Agregar al carrito
        carrito.push({
            id: productoSeleccionado,
            nombre: producto.nombre,
            precio: producto.precio,
            fecha: new Date().toLocaleString()
        });

        // Mostrar notificación
        mostrarNotificacion(`¡${producto.nombre} agregado al carrito!`);

        // Guardar en localStorage para persistencia
        guardarCarrito();

        // Registrar en consola
        console.log('Compra realizada:', producto);
        console.log('Carrito actual:', carrito);

        // Cerrar modal
        cerrarModal();
    }
}

/**
 * Muestra una notificación de confirmación
 * @param {string} mensaje - Mensaje a mostrar
 */
function mostrarNotificacion(mensaje) {
    const textoNotificacion = document.getElementById('texto-notificacion');
    textoNotificacion.textContent = mensaje;
    notificacion.classList.add('mostrar');

    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
    }, 3000);
}

/**
 * Guarda el carrito en localStorage
 */
function guardarCarrito() {
    localStorage.setItem('carrito_sylvanians', JSON.stringify(carrito));
}

/**
 * Carga el carrito desde localStorage
 */
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito_sylvanians');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        console.log('Carrito cargado:', carrito);
    }
}

/**
 * Obtiene el contenido del carrito
 * @returns {Array} Array con los productos del carrito
 */
function obtenerCarrito() {
    return carrito;
}

/**
 * Vacía el carrito
 */
function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('carrito_sylvanians');
    console.log('Carrito vaciado');
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
    console.log('Aplicación Máquina Sylvanians cargada');
});
