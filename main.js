const taskForm = document.querySelector('#taskForm');
const inputForm = document.querySelector('.inputForm');
const tasks = document.querySelector('.tasks');
const mainPlaceholder = inputForm.placeholder;
let taskHtml = '';

if (localStorage.getItem('tasks')) {
  tasks.insertAdjacentHTML('afterbegin', localStorage.getItem('tasks'));
}

taskForm.addEventListener('submit' , (event) => {
  event.preventDefault();
  const inputText = inputForm.value;
  taskHtml = `<li class="task-item">${inputText}</li>`;
  tasks.insertAdjacentHTML('afterbegin', taskHtml);
  
  inputForm.value = '';
  document.getElementById('myModal').style.display = 'none';

  saveLocalBase();
});

inputForm.addEventListener('focus', () => {
	inputForm.placeholder = ''
});

inputForm.addEventListener('blur' , () => {
  inputForm.placeholder = mainPlaceholder;
});

function saveLocalBase () {
  localStorage.setItem('tasks', tasks.innerHTML);
}

// localStorage.clear();