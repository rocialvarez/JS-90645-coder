const params = new URLSearchParams(window.location.search);
const albumId = params.get("id");

const album = albumes.find((a) => a.id === Number(albumId));

const h1 = document.querySelector("h1");

h1.textContent = album.name;

const h2 = document.querySelector("h2");

h2.textContent = album.group;

const h4 = document.querySelector("h4");

h4.textContent = album.price;

const p = document.querySelector("p");

p.textContent = album.description;
