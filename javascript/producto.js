const albumRecuperado = JSON.parse(localStorage.getItem('album'));

const params = new URLSearchParams(window.location.search);
const albumId = params.get('id');

fetch('../data/albumes.json')
  .then((response) => response.json())
  .then((albumes) => {
    const album = albumes.find((a) => a.id === Number(albumId));

    if (album) {
      const h1 = document.querySelector('h1');

      h1.textContent = album.name;

      const h2 = document.querySelector('h2');

      h2.textContent = album.group;

      const h4 = document.querySelector('h4');

      h4.textContent = album.price;

      const p = document.querySelector('p');

      p.textContent = album.description;

      const img = document.querySelector('img');
      img.src = `../medios/${album.id}.jpg`;
    } else {
      Swal.fire({
        title: 'Oops',
        text: 'El álbum que intentas ver no existe.',
        icon: 'warning',
      });
    }
  })
  .catch(() => {
    Swal.fire({
      title: 'Error',
      text: 'Los albumes no pudieron cargarse.',
      icon: 'error',
    });
  });
