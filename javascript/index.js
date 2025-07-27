const section = document.querySelector("section.misProd");

const misProd = albumes.map(
  (album) =>
    `<div class="card" style="width: 300px">
    <img src="./medios/${album.id}.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${album.name} - ${album.group}</h5>
      <p class="card-text">
					${album.description}
				</p>
      <a href="/producto.html?id=${album.id}" class="btn btn-primary">
        Más información
      </a>
    </div>
  </div>`
);

section.innerHTML = misProd.join(" ");
