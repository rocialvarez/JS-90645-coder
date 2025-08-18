const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.bg-danger');
const ul = document.querySelector('ul');

const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito')) || { albumesGuardados: [] };

carritoAlmacenado.albumesGuardados.forEach((item) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const borrar = document.createElement('img');

  li.textContent = `${albumesGuardados.nombre} - $${albumesGuardados.total}`;
  span.textContent = input.value;
  borrar.src = '../medios/borrar-opcion.png';

  borrar.onclick = () => {
    li.remove();
    const index = carritoAlmacenado.albumesGuardados.indexOf(item);
    if (index > -1) {
      carritoAlmacenado.albumesGuardados.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carritoAlmacenado));
    }
  };

  li.appendChild(span);
  li.appendChild(borrar);
  ul.appendChild(li);
});

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

  const total = album.price * input.value;

  const albumesGuardados = {
    nombre: album.name,
    precio: album.price,
    cantidad: Number(input.value),
    total: total,
  };

  carritoAlmacenado.albumesGuardados.push(item);
  localStorage.setItem('carrito', JSON.stringify(carritoAlmacenado));

  const li = document.createElement('li');
  const span = document.createElement('span');
  const borrar = document.createElement('img');

  borrar.src = '../medios/borrar-opcion.png';
  borrar.onclick = () => li.remove();
  li.textContent = `${album.name} - $${total}`;
  span.textContent = input.value;

  li.appendChild(span);
  li.appendChild(borrar);
  ul.appendChild(li);
  input.value = '';
}

function handleHide() {
  error.classList.add('d-none');
}
