const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.bg-danger');
const ul = document.querySelector('ul');

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

button.addEventListener('click', handleClick);
input.addEventListener('keydown', handleHide);

function handleClick() {
  if (input.value === '') {
    Swal.fire({
      icon: 'error',
      title: '¡Un momento!',
      text: 'Por favor ingresa número mayor a 0',
      confirmButtonText: 'Aceptar',
    });
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  const borrar = document.createElement('img');

  const total = album.price * input.value;

  borrar.src = '../medios/borrar-opcion.png';
  borrar.onclick = () => li.remove();
  li.textContent = `${album.name} - $${total}`;
  span.textContent = input.value;
  li.appendChild(span);
  li.appendChild(borrar);
  ul.appendChild(li);
  input.value = '';
}

carrito.push({
  name: album.name,
  price: album.price,
  quantity: Number(input.value),
  total: total,
});

localStorage.setItem('carrito', JSON.stringify(carrito));

input.value = '';

function handleHide() {
  error.classList.add('d-none');
}
