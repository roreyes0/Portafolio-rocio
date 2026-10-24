# Portafolio digital de Rocío

Portafolio personal responsive construido con HTML, Tailwind CSS 3 y JavaScript.

## Requisitos
- Node.js LTS instalado en la computadora.
- Conexión a internet la primera vez para instalar Tailwind CSS.

## Cómo iniciarlo
1. Descomprime la carpeta `portafolio_rocio`.
2. Abre esa carpeta en Visual Studio Code.
3. Abre una terminal dentro de la carpeta.
4. Ejecuta `npm install`.
5. Ejecuta `npm run build`.
6. Abre `index.html` en tu navegador. Para una experiencia de desarrollo más cómoda puedes instalar la extensión Live Server de VS Code.
7. Mientras editas las clases Tailwind, ejecuta `npm run dev` en una terminal para que se regenere el CSS. Cuando termines, ejecuta `npm run build` para la versión minificada.

## Cambiar el texto
Abre `index.html` y busca el texto que quieras cambiar. Los comentarios HTML señalan dónde personalizar partes importantes.

## Añadir una foto
1. Guarda tu foto en la carpeta `assets` con el nombre `foto-perfil.jpg`.
2. En `index.html`, busca `photo-placeholder` dentro de la sección de inicio.
3. Sustituye todo el bloque `<div class="photo-placeholder"...> ... </div>` por:
   `<img class="profile-photo" src="assets/foto-perfil.jpg" alt="Fotografía de Rocío Reyes">`
4. En `src/input.css`, añade:
   `.profile-photo { width: 100%; height: 100%; min-height: 300px; object-fit: cover; border-radius: 21px; }`

Usa una imagen optimizada (WebP o JPG comprimido) para mantener la carga rápida. Si usas WebP, cambia la extensión en la ruta HTML.

## Personalizar la experiencia de programación
En la sección de experiencia de `index.html` aparece una tarjeta provisional para Fronter. Completa cargo, fechas, responsabilidades y tecnologías solo con información real. Haz lo mismo con las tarjetas de proyectos: no publiques proyectos de ejemplo como si fueran trabajos reales.

## Importante antes de publicar
- Revisa correo y URL de LinkedIn.
- Revisa que todas las afirmaciones describan tu experiencia real.
- No publiques referencias personales ni números de teléfono de terceros.
- Prueba el sitio en móvil y computadora.
