const form = document.getElementById("form");
const input = document.getElementById("input");
const tbody = document.getElementById("tbody");

function getAllNotes() {
  try {
    return JSON.parse(localStorage.notes);
  } catch (e) {
    return [];
  }
}

function render() {
  const notes = getAllNotes();
  let html = "";
  for (let note of notes) {
    html += `
        <tr>
            <td>${note.id}</td>
            <td>${note.text}</td>
            <td>
                <button class="btn btn-sm btn-danger delete" data-id="${note.id}">حذف</button>
            </td>
        </tr>
        `;
  }
  tbody.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", render);

function addNote(text) {
  const notes = getAllNotes();
  const lastId = notes.length ? notes[notes.length - 1].id : 0;
  const newNote = {
    id: lastId + 1,
    text,
  };
  notes.push(newNote);
  localStorage.notes = JSON.stringify(notes);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  if (!text) {
    return;
  }
  addNote(text);
  input.value = "";
  input.focus();
  render();
});

function deleteNote(id) {
  let notes = getAllNotes();
  notes = notes.filter((n) => n.id !== Number(id));
  localStorage.notes = JSON.stringify(notes);
}

tbody.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete")) {
    const id = target.dataset.id;
    deleteNote(id);
    render();
  }
});

//// سینک کردن دو تب
window.addEventListener("storage", render);
