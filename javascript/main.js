const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.bg-danger');
const ul = document.querySelector('ul');

button.addEventListener('click', handleClick);
input.addEventListener('keydown', handleHide);

function handleClick() {
  if (input.value === '') {
    error.classList.remove('d-none');
    return;
  }
  const li = document.createElement('li');
  const span = document.createElement('span');
  const borrar = document.createElement('img');
  borrar.src = '../medios/borrar-opcion.png';
  borrar.onclick = () => li.remove();
  span.textContent = input.value;
  li.appendChild(span);
  li.appendChild(borrar);
  ul.appendChild(li);
  input.value = '';
}

function handleHide() {
  error.classList.add('d-none');
}
