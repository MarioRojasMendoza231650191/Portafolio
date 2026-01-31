# Máquina Sylvanians - Documentación Técnica

## Descripción
Tienda interactiva de figuras coleccionables Sylvanian con sistema de carrito de compras, notificaciones y almacenamiento local.

## Estructura del Proyecto

```
sylvanian/
├── index.html           # Página principal de la tienda
├── carrito.html         # Página del carrito de compras
├── ayuda.html           # Página de ayuda y documentación
├── script.js            # Lógica de JavaScript (compras, carrito)
├── styles.css           # Estilos CSS
├── README.md            # Este archivo
└── assets/
    ├── images/          # Imágenes de productos
    │   ├── Titulo.png
    │   ├── sylvanian1.png
    │   ├── sylvanian2.png
    │   └── sylvanian3.png
    └── audio/           # Archivos de audio (si es necesario)
```

## Características

- ✨ Interfaz interactiva y responsiva
- 🛒 Sistema de carrito de compras
- 💾 Almacenamiento de datos en localStorage
- 📱 Diseño mobile-friendly
- 🎨 Tema personalizado Sylvanian

## Archivos Principales

### index.html
Página principal con grid de productos y modal de compra.

### carrito.html
Página que muestra los productos agregados al carrito con:
- Cálculo automático de totales
- Opción de eliminar items
- Resumen de compra

### ayuda.html
Página con guía completa de uso, solución de problemas y personalizaciones.

### script.js
Contiene toda la lógica de:
- Gestión del carrito
- Modales y notificaciones
- Almacenamiento de datos

### styles.css
Estilos personalizados para:
- Diseño responsivo
- Animaciones
- Tema Sylvanian (rosa y blanco)

## Rutas Relativas

Todas las imágenes y recursos usan rutas relativas dentro de la carpeta `assets/`:

```html
<!-- Imágenes -->
<img src="assets/images/Titulo.png" alt="Título">

<!-- Audio (si aplica) -->
<audio src="assets/audio/cancion.mp3"></audio>

<!-- Hojas de estilo -->
<link rel="stylesheet" href="styles.css">

<!-- Scripts -->
<script src="script.js"></script>

<!-- Enlaces internos -->
<a href="index.html">Tienda</a>
<a href="carrito.html">Carrito</a>
<a href="ayuda.html">Ayuda</a>
```

## Cómo Usar

1. Abre `index.html` en tu navegador
2. Explora los productos disponibles
3. Haz clic en "Comprar" para agregar items al carrito
4. Ve al carrito para revisar tu compra
5. Consulta la sección de ayuda para más información

## Datos de Productos

Los productos están definidos en `script.js` con la siguiente estructura:

```javascript
const productos = {
    1: { nombre: 'Sylvanian 1', precio: '$19.99' },
    2: { nombre: 'Sylvanian 2', precio: '$19.99' },
    3: { nombre: 'Sylvanian 3', precio: '$19.99' }
};
```

## Personalización

### Agregar Nuevos Productos
1. Añade la imagen a `assets/images/`
2. Agrega el producto en `script.js`
3. Crea el elemento HTML en `index.html`

### Cambiar Tema
Los colores principales están en `styles.css`:
- Color primario: `#ff69b4` (rosa)
- Color secundario: `#ff1493` (rosa oscuro)
- Fondo: `rgb(255, 225, 233)` (rosa pálido)

### Cambiar Precios
Edita los precios en `script.js` en el objeto `productos`.

## Almacenamiento de Datos

El carrito se guarda automáticamente en `localStorage` con la clave `carrito_sylvanians`. Los datos persisten entre sesiones del navegador.

## Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles modernos

## Notas Técnicas

- Las rutas de imágenes son relativas al archivo HTML
- Usa localStorage para persistencia de datos
- Incluye animaciones CSS para mejor UX
- Diseño totalmente responsivo

## Autor

Proyecto personal de portafolio - 2026
