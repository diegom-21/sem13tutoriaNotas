document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('note-form');
    const notesContainer = document.getElementById('notes-container');

    // Cargar notas almacenadas al cargar la página
    loadNotes();

    // Manejar el envío del formulario
    noteForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        addNote(title, content);
        noteForm.reset();
    });

    // Función para cargar notas desde localStorage
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesContainer.innerHTML = '';
        notes.forEach(note => {
            displayNote(note);
        });
    }

    // Función para agregar una nota
    function addNote(title, content) {
        const note = { title, content };
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNote(note);
    }

    // Función para mostrar una nota en el DOM
    function displayNote(note) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        
        const noteTitle = document.createElement('div');
        noteTitle.classList.add('note-title');
        noteTitle.textContent = note.title;
        
        const noteContent = document.createElement('div');
        noteContent.classList.add('note-content');
        noteContent.textContent = note.content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            deleteNote(note);
        });

        noteElement.appendChild(noteTitle);
        noteElement.appendChild(noteContent);
        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);
    }

    // Función para eliminar una nota
    function deleteNote(noteToDelete) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes = notes.filter(note => note.title !== noteToDelete.title || note.content !== noteToDelete.content);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    }
});
