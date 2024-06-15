### README.md

# Notas App

## Descripción
Aplicación web simple para agregar, ver y eliminar notas. Cada nota tiene un título y un contenido. Las notas se almacenan en el navegador utilizando localStorage en formato JSON. La interfaz está diseñada para ser intuitiva y fácil de usar.

## Lógica JS de la aplicación:
- **Evento DOMContentLoaded**: Asegura que el contenido del DOM se cargue antes de ejecutar el código.
- **Variables**: Define referencias al formulario y al contenedor de notas.
- **Carga de Notas**: La función loadNotes carga las notas desde localStorage y las muestra al cargar la página.
- **Manejo del Formulario**: Al enviar el formulario, se agrega una nueva nota previniendo el comportamiento por defecto. Se obtienen los valores del título y contenido, y se llama a addNote.
- **Agregar Nota**: La función addNote crea una nueva nota, la guarda en localStorage y la muestra en el DOM usando displayNote.
- **Mostrar Nota**: La función displayNote crea elementos HTML para el título, contenido y botón de eliminación de una nota, y los añade al contenedor de notas.
- **Eliminar Nota**: La función deleteNote elimina una nota de localStorage y recarga las notas en el contenedor.

