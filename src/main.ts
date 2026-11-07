import './style.css';

// Mengambil variabel dari .env
const appTitle = import.meta.env.VITE_APP_TITLE || 'Tugas Kuliah';
const appVersion = import.meta.env.VITE_APP_VERSION || '1.0.0';

// Menampilkan judul dan versi
document.getElementById('app-title')!.innerText = appTitle;
document.getElementById('app-version')!.innerText = `Versi: ${appVersion}`;

// Logika To-Do List
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const taskList = document.getElementById('task-list') as HTMLUListElement;

addBtn.addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;
  
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = taskInput.value;
  
  const actions = document.createElement('div');
  actions.className = 'actions';
  
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle';
  toggleBtn.innerText = '✓';
  toggleBtn.onclick = () => li.classList.toggle('selesai');
  
  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.innerText = '✎';
  editBtn.onclick = () => {
    const newText = prompt('Edit tugas:', span.innerText);
    if (newText) span.innerText = newText;
  };
  
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.innerText = '✗';
  deleteBtn.onclick = () => li.remove();
  
  actions.append(toggleBtn, editBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);
  
  taskInput.value = '';
});