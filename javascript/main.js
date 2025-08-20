const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.bg-danger');
const ul = document.querySelector('ul');

const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito')) || { items: [] };

const album = JSON.parse(localStorage.getItem('album'));

carritoAlmacenado.items.forEach((item) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const borrar = document.createElement('img');

  li.textContent = `${item.nombre} - $${item.total}`;
  span.textContent = item.cantidad;
  borrar.src = '../medios/borrar-opcion.png';

  borrar.onclick = () => {
    li.remove();
    const index = carritoAlmacenado.items.indexOf(item);
    if (index > -1) {
      carritoAlmacenado.items.splice(index, 1);
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

  const item = {
    nombre: album.name,
    precio: album.price,
    cantidad: Number(input.value),
    total: total,
  };

  carritoAlmacenado.items.push(item);
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
